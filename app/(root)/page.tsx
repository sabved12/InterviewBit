import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

import InterviewCard from '@/components/InterviewCard'
import { getCurrentUser} from '@/lib/actions/auth.action'
import {getInterviewsByUserId, getLatestInterviews } from '@/lib/actions/general.action'

const page =async  () => {

  const user= await getCurrentUser();

  const [userInterviews,latestInterviews]=await Promise.all([
    await getInterviewsByUserId(user?.id!),
    await getLatestInterviews({userId: user?.id!})
  ])
  

  const hasPastInterviews=userInterviews?.length!>0;
  const hasUpcomingInterviews=latestInterviews?.length!>0;

  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col max-w-lg gap-7'>
            <h2>Get Interview ready with AI powered Practice and
              Feedback </h2>

              <p className='lg text-black font-semibold'>
                Practice on real interview questions
              </p>

              <Button asChild className="btn-primary max-sm:w-full">
                <Link href="/interview">Start an interview</Link>
              </Button>
        </div>

        <Image src="/robot.png" alt="robo" width={400} height={400}
         className="max-sm:hidden"/>
      </section>

      <section className='flex flex-col gap-6 mt-9'>
          <h2>Your interviews</h2>
          <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                id={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p>You haven't taken any interviews yet</p>
          )}
        </div>
      </section>

      <section className='flex flex-col gap-6 mt-9'>
          <h2>Take an interview</h2>
          <div className='interviews-section'>
          {hasUpcomingInterviews ? (
            latestInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                id={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p>There are no new interviews available</p>
          )}
          </div>

      </section>
    </>
  )
}

export default page
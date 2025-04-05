import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'

const page = () => {
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
          <div className='interviews-section'>
             {dummyInterviews.map((interview)=>(
              <InterviewCard {...interview} key={interview.id}/>
             ))}

             {/* <p>You haven't taken any interviews yet.</p> */}

          </div>
      </section>

      <section className='flex flex-col gap-6 mt-9'>
          <h2>Take an interview</h2>
          <div className='interviews-section'>
             {dummyInterviews.map((interview)=>(
              <InterviewCard {...interview} key={interview.id}/>
             ))}
          </div>

      </section>
    </>
  )
}

export default page
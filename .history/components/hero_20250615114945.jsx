'use client'

import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"

const HeroSection = () => {
  return (
    <div className="pb-20 px-4">
      <div>
        <h1>Manage Your Finances <br /> with Intelligence </h1>
        <p>An AI-powered financial management platform that helps you track, analyze, and optimize your spending with real-time insights.</p>
        <div>
            <Link href={"/dashboard"} >
                <Button size={'lg'} className={"px-6"}>
                    Get Started
                </Button>
            </Link>
            <Link href={"https://github.com/samipevekar"} >
                <Button size={'lg'} variant={'outline'} className="px-6">
                    Watch Demo
                </Button>
            </Link>
        </div>
        <div>
            <div>
                <Image
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

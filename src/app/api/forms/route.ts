import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const dataFilePath = path.join(process.cwd(), 'data/form-submissions.json')

export async function GET() {
  try {
    const fileContent = await fs.readFile(dataFilePath, 'utf-8')
    const submissions = JSON.parse(fileContent)
    return NextResponse.json(submissions)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error fetching submissions' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const newSubmission = await req.json()

    const fileContent = await fs.readFile(dataFilePath, 'utf-8')
    const submissions = JSON.parse(fileContent)

    submissions.push(newSubmission)

    await fs.writeFile(dataFilePath, JSON.stringify(submissions, null, 2))

    return NextResponse.json({ message: 'Form submitted successfully' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error submitting form' }, { status: 500 })
  }
}

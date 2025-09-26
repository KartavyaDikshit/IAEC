import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const dataFilePath = path.join(process.cwd(), 'data/study-abroad.json')

export async function POST(req: NextRequest) {
  try {
    const { country, ...updatedContent } = await req.json() // Extract country from body

    if (!country) {
      return NextResponse.json({ message: 'Country not specified in request body' }, { status: 400 })
    }

    const fileContent = await fs.readFile(dataFilePath, 'utf-8')
    const data = JSON.parse(fileContent)

    if (data[country]) {
      data[country] = { ...data[country], ...updatedContent }
    } else {
      return NextResponse.json({ message: 'Country not found' }, { status: 404 })
    }

    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2))

    return NextResponse.json({ message: 'Content updated successfully' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error updating content' }, { status: 500 })
  }
}
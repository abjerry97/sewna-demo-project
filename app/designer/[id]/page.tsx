import designers from '@/data/designers.json'
import DesignerProfile from './designer-profile'
import { Designer } from '@/types/types'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function Page({ params }: PageProps) {
  const { id } = await params
  const designer: Designer | undefined = designers.find((d) => d.id === Number(id))

  if (!designer) {
    return <div className="p-10 text-center text-red-500 text-lg">Designer not found</div>
  }

  return <DesignerProfile designer={designer} />
}

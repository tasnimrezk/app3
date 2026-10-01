import PayOnline from "../PayOnline"

type Props = {
  params: Promise<{
    cartId: string
  }>
}

export default async function PayOnlinePage({ params }: Props) {
  const { cartId } = await params

  return <PayOnline cartId={cartId} />
}
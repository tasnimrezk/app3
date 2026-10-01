import getOrders from '@/api/actions/getOrders'

export default async function OrdersPage() {

  const orders = await getOrders()

  console.log(orders)

  return (
   <>
  
{orders?.data?.map((order: any) => (
  <div
    key={order._id}
    className="border rounded-xl p-4 sm:p-6 shadow-sm mb-5 mt-10"
  >
    <h2 className="text-lg sm:text-xl font-bold mb-4 break-all">
      Order #{order._id}
    </h2>

    <div className="flex flex-col gap-4">
      {order.cartItems?.map((item: any) => (
        <div
          key={item._id}
          className="flex flex-col sm:flex-row sm:items-center gap-4 border-b pb-4 last:border-b-0"
        >
          <div className="flex justify-center sm:justify-start shrink-0">
            <img
              src={item.product?.imageCover}
              alt={item.product?.title}
              className="w-28 h-28 sm:w-24 sm:h-24 object-contain"
            />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-semibold text-base sm:text-lg">
              {item.product?.title}
            </h3>

            <p className="text-sm sm:text-base mt-1">
              Quantity: {item.count}
            </p>

            <p className="text-sm sm:text-base">
              Price: {item.price}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
      <p className="font-bold text-base sm:text-lg">
        Total: {order.totalOrderPrice}
      </p>
    </div>
  </div>
))}



   
   
   </>
  )
}
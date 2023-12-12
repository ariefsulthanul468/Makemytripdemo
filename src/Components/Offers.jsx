import OfferCard
 from "./OfferCard"
const Offers = () => {
  const offerCategory = ["All Offers", "Bank Offers", "Flight", "Hotels", "Holidays", "Train Cabs"]
  
  return (
    <section className="w-[90%] m-auto my-16 p-4 rounded-3xl bg-white shadow-md">
    <div className="flex items-start lg:items-center justify-between">
      <h2 className="cursor-pointer text-black font-semibold text-4xl block lg:flex">Offers</h2>
      <ul className="lg:flex items-center lg:gap-8">
        {offerCategory.map((item, i) => (<li className="cursor-pointer text-gray-500 text-lg font-medium hover:text-red-800" key={i}>{item}</li>))}
      </ul>
      <h3 className="cursor-pointer text-lg font-medium text-red-800">View All</h3>
    </div>
     <OfferCard/>
    </section>
  )
}

export default Offers   
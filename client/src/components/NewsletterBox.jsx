
export const NewsletterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        
    }
  return (
      <div className="text-center">
          <p className="text-2xl font-medium text-gray-800">Subscribe Now and get 20% off.</p>
          <p className="text-gray-400 mt-3">Save your wallet, Get the best products at high discount</p>
          <div className="flex justify-center items-center">
          <form onSubmit={onSubmitHandler} className="flex mt-5 md:w-1/2 gap-2">
              <input type="email" placeholder="Enter your email" className="sm:flex-1 outline-none border-2 px-3 py-3" required />
              <button type="submit" className="bg-black text-white text-xs px-10 py-4">SUBSCRIBE</button>
          </form>
          </div>
    </div>
  )
}

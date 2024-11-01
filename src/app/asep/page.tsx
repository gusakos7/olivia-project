export default function AsepPage() {
  return (
    <section className="flex flex-col">
      <div className="bg-[#8AAAE5]">
        <div className="max-w-[75%] py-1 text-white flex justify-between mx-auto">
          <div>thlefono</div>
          <div>dieuthinsi</div>
          <div>email</div>
        </div>
      </div>
      <nav className="">
        <div className="flex justify-between max-w-[75%] mx-auto">

        {/* Logo */}
        <div className="p-20 bg-[#383838] text-center text-white">
          LOGO
        </div>

        <div className="flex space-x-4 items-center">
          <div className="">Home</div>
          <div className="">About</div>
          <div className="">Contact</div>
        </div>
        </div>
      </nav>
    </section>
  )
}
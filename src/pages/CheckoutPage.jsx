import Navbar from "../components/layout/Navbar";
import InputField from "../components/common/InputField";
function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">

      <Navbar />

      <div className="max-w-[1400px] mx-auto px-8 py-10"> 

        {/* Back Button */}
        <p className="text-sm text-gray-500 mb-5 cursor-pointer">
          ← Back to plans
        </p>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 items-start">

          {/* LEFT SECTION */}
          <div className="bg-white rounded-2xl p-10 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">

            <h1 className="text-[42px] font-bold text-gray-900 mb-8 leading-tight">
              Review your details
            </h1>

            <h2 className="text-lg font-semibold mb-6">
              Billing Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

  <InputField
    label="Company Name"
    placeholder="abhigyan"
  />

  <InputField
    label="Email"
    placeholder="abhigyan.pandey@getreelax.com"
  />

  <InputField
    label="GST Number"
    placeholder="GST Number"
    optional={true}
  />

  <InputField
    label="PAN Number"
    placeholder="PAN Number"
    optional={true}
  />

  <InputField
    label="Premise/House no."
    placeholder="Premise/House no."
  />

  <InputField
    label="Street"
    placeholder="Street"
  />

  <InputField
  label="State"
  placeholder="Select state"
  isSelect={true}
/>

<InputField
  label="City"
  placeholder="Select city"
  isSelect={true}
/>

<InputField
  label="Country"
  placeholder="India"
  isSelect={true}
/>

  <InputField
    label="Pin Code"
    placeholder="Pincode"
  />

</div>
<div className="flex justify-end gap-4 mt-12 border-t border-gray-200 pt-6">  

  <button className="px-8 h-12 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition">
  Cancel
  </button>
  <button className="px-8 h-12 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition">
    Save Details
  </button>

</div>

          </div>

          {/* RIGHT SECTION */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">

            <h2 className="text-[34px] font-bold mb-6 leading-tight">
              Order Summary
            </h2>

        <div className="space-y-6">

  {/* PLAN CARD */}
  <div className="border border-gray-200 rounded-xl p-5">

    <div className="flex justify-between items-start">

      <div>
        <h3 className="text-3xl font-bold text-gray-900">
          ₹4,999
          <span className="text-sm font-normal text-gray-500">
            /month
          </span>
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          Includes 5,000 credits/mo.
        </p>
      </div>

      <div className="text-right">
        <p className="text-xs text-blue-600 font-semibold tracking-wide">
          SELECTED PLAN
        </p>

        <h4 className="font-bold text-lg">
          Startup
        </h4>
      </div>

    </div>

    <button className="w-full mt-5 border border-blue-500 text-blue-600 rounded-full py-3 font-medium hover:bg-blue-50 transition">
      Upgrade to Growth Plan
    </button>

  </div>

  {/* COUPON SECTION */}
<div className="border border-gray-200 rounded-xl overflow-hidden">

  <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
    <span className="font-medium text-sm">
      Apply Coupon
    </span>

    <span className="text-gray-400">
      ˅
    </span>
  </div>

  <div className="p-4">

    <div className="flex gap-3 mb-4">

      <input
        type="text"
        placeholder="Enter coupon code"
        className="flex-1 border border-gray-200 rounded-xl px-4 h-11 text-sm outline-none"
      />

      <button className="px-5 bg-blue-600 text-white rounded-xl text-sm font-medium">
        Apply
      </button>

    </div>

    <div className="space-y-3">

      <div className="border border-blue-500 rounded-xl px-4 py-3 flex justify-between items-center">

        <div>
          <p className="font-semibold text-sm">
            WELCOME20
          </p>

          <p className="text-xs text-gray-500">
            20% off on your first month
          </p>
        </div>

        <div className="w-4 h-4 rounded-full border-2 border-blue-600"></div>

      </div>

      <div className="border border-gray-200 rounded-xl px-4 py-3 flex justify-between items-center">

        <div>
          <p className="font-semibold text-sm">
            ANNUAL50
          </p>

          <p className="text-xs text-gray-500">
            50% off on annual plans
          </p>
        </div>

        <div className="w-4 h-4 rounded-full border border-gray-400"></div>

      </div>

    </div>

  </div>

</div>

  {/* PRICE DETAILS */}
  <div className="space-y-4 text-sm text-gray-700">

    <div className="flex justify-between">
      <span>Subtotal</span>
      <span className="font-medium">₹14,999.00</span>
    </div>

    <div className="flex justify-between">
      <span>Tax (18% GST)</span>
      <span className="font-medium">₹1,079.64</span>
    </div>

    <div className="border-t pt-4 flex justify-between items-center">
      <span className="text-lg font-semibold">
        Total due today
      </span>

      <span className="text-2xl font-bold text-blue-600">
        16,078.64
      </span>
    </div>

  </div>

  {/* PAYMENT BUTTON */}
  <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white h-14 rounded-xl font-semibold">
    Proceed to Payment
  </button>

</div>


          </div>

        </div>
      </div>
    </div>
  )
}

export default CheckoutPage

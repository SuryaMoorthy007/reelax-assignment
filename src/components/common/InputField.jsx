function InputField({
  label,
  placeholder,
  optional = false,
  isSelect = false
}) {
  return (
    <div className="flex flex-col gap-2">

      <label className="text-sm font-medium text-gray-700">
        {label}

        {optional && (
          <span className="text-gray-400 ml-1">
            (Optional)
          </span>
        )}
      </label>

      <div className="relative">

        <input
          type="text"
          placeholder={placeholder}
          className="w-full border border-gray-200 rounded-lg px-4 h-14 outline-none focus:border-blue-500 text-sm text-gray-700"
        />

        {isSelect && (
          <span className="absolute right-4 top-3 text-gray-400">
            ˅
          </span>
        )}

      </div>

    </div>
  )
}

export default InputField

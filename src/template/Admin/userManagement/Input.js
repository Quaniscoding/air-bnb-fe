
export default function InputCreateUser({
    onChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired,
    placeholder,
}) {
    return (
        <div className="my-5">
            <label
                htmlFor={labelFor}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {labelText}
            </label>
            <input
                onChange={onChange}
                value={value}
                id={id}
                name={name}
                type={type}
                required={isRequired}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={placeholder}
            />
        </div>
    )
}
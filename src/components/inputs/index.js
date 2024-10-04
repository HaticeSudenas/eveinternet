import classNames from "classnames";
import { useField } from "formik";

export default function IconInputs({ placeholder, useFormikField, svg, ...props }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [field, meta, helpers] = useFormikField ? useField(props) : [null, null, null];
    return (
        <label class="relative block">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg class="w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 22">
                    <path d={svg} />
                </svg>
            </div>
            {useFormikField ? (
                <input {...field} {...props} required id="toggle-button" class="outline-none peer bg-[color:var(--background-secondary)] border-2  border-[color:var(--background-third)] font-bold text-md rounded-lg focus:bg-[color:var(--background-primary)] block w-full px-5 py-3" placeholder={placeholder} />
                
            ) : (
                <input {...props} required id="email-address-icon" class=" outline-none peer bg-[color:var(--background-secondary)] border-2  border-[color:var(--background-third)] font-bold text-md rounded-lg focus:bg-[color:var(--background-primary)] block w-full px-5 py-3" placeholder={placeholder} />
            )}

        </label>
    )
}
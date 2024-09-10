import { jsx as _jsx } from "react/jsx-runtime";
export function Button({ id, className, disabled, children, ...props }) {
    return (_jsx("button", { id: id, className: `${className}`, disabled: disabled, ...props, children: children }));
}

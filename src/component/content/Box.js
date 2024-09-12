import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/**
 * Créé une boite avec un titre
 * @param {string} id
 * @param {string} className
 * @param {React.CSSProperties} style
 * @param {string} title
 * @param {string} titleClass
 * @param {React.CSSProperties} titleStyle
 * @param {React.ReactNode} children
 * @returns
 */
function Box({ id, className, style, title, titleClass = "", titleStyle, children }) {
    const containerStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        height: 'auto',
        ...style
    };
    const titleStyles = {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        ...titleStyle
    };
    className = className == undefined ? "" : ` ${className}`;
    titleClass = titleClass == undefined ? "" : ` ${titleClass}`;
    return _jsx(_Fragment, { children: _jsxs("div", { id: id, className: `item ${className}`, style: containerStyles, children: [title && _jsx("span", { id: title?.split(" ").join("-"), className: `item${titleClass}`, style: titleStyles, children: title }), children] }) });
}
/**
 * Créé une description à la box
 * @param {string} id
 * @param {string} className
 * @param {React.CSSProperties} style
 * @param {React.ReactNode} children
 * @returns
 */
Box.Description = function Description({ id, className, style, children }) {
    return _jsx("span", { id: id, className: `item${className != undefined ? ` ${className}` : ""}`, style: style, children: children });
};
export { Box };

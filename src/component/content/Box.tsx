import React from "react"

type BoxProps = {
    id: string,
    className?: string,
    style?: React.CSSProperties
    title?: string,
    titleClass?: string,
    titleStyle?: React.CSSProperties
    children?: React.ReactNode
}

type BoxDescProps = {
    id: string,
    className?: string,
    style?: React.CSSProperties,
    children: React.ReactNode
}

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
function Box({id, className, style, title, titleClass = "", titleStyle, children}: BoxProps) {
    const containerStyles: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        height: 'auto',
        ...style
    }
    const titleStyles: React.CSSProperties = {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        ...titleStyle
    }
    className = className == undefined ? "" : ` ${className}`
    titleClass = titleClass == undefined ? "" : ` ${titleClass}`
    return <>
        <div id={id} className={`item ${className}`} style={containerStyles}>
            {title && <span id={title?.split(" ").join("-")} className={`item${titleClass}`} style={titleStyles}>{title}</span>}
            {children}
        </div>
    </>
}

/**
 * Créé une description à la box
 * @param {string} id
 * @param {string} className
 * @param {React.CSSProperties} style
 * @param {React.ReactNode} children
 * @returns 
 */
Box.Description = function Description({id, className, style, children}: BoxDescProps)
{
    return <span id={id} className={`item${className != undefined ? ` ${className}` : ""}`} style={style}>{children}</span>
}

export {Box}
/**
 * 代表链接项
 */
export type LinkTime = Link | LinkGroup;

/**
 * 代表一个链接
 */
export interface Link{
    name:string,
    linkTo:string
}

/**
 * 代表一组链接
 */
export interface LinkGroup{
    name:string;
    times:LinkTime[];
}

export function useHerderLinkList():LinkGroup{
    return {
        name:"main",
        times:[
            
        ]
    }
}






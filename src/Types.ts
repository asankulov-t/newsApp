// export type HdObj={
//     author: string|null
//     content: string|null
//     description:string|null
//     publishedAt: string|null
//     source:{
//         id: string|null
//         name:string|null
//     }
//     title: string|null
//     url:string|null
//     urlToImage: string|null
// }
// export type HadlinesType={
//     hadlines:Array<HdObj>
// }
export type NewDataType={
    // @ts-ignore
    data:Array<NewsType>,
    count:number
    show?:boolean
}
export module NewsType {

    export interface Multimedia {
        url: string;
        format: string;
        height: number;
        width: number;
        type: string;
        subtype: string;
        caption: string;
        copyright: string;
    }
    export interface RootObject {
        slug_name: string;
        section: string;
        subsection: string;
        title: string;
        abstract: string;
        uri: string;
        url: string;
        byline: string;
        thumbnail_standard: string;
        item_type: string;
        source: string;
        updated_date: Date;
        created_date: Date;
        published_date: Date;
        first_published_date: Date;
        material_type_facet: string;
        kicker: string;
        subheadline: string;
        des_facet: string[];
        org_facet?: any;
        per_facet?: any;
        geo_facet: string[];
        related_urls?: any;
        multimedia: Multimedia[];
    }
}
export type MetadataType= {
    url:string,
    format:string,
    height:number,
    width:number
}

export type InnerMediaType={
    type:string,
    subtype:string,
    caption:string,
    copyright:string,
    approved_for_syndication:number,
    media_metadata:Array<MetadataType>
}

export type InnerMostType={
    url:string,
    adx_keywords:string,
    subsection:string,
    column:string,
    eta_id:number,
    section:string,
    id:number,
    asset_id:number,
    nytdsection:string,
    byline:string,
    type:string,
    title:string,
    abstract:string,
    published_date:string,
    source:string,
    updated:string,
    des_facet:Array<string>,
    org_facet:Array<string>,
    per_facet:Array<string>,
    geo_facet:Array<string>,
    media:Array<InnerMediaType>,
    uri:string
}
export type MostPopularType={
    data:Array<InnerMostType>
    show?:boolean
}

export type InnerMediaData={
    caption:string,
    credit:string,
    crop_name:string,
    height:number,
    legacy:{
        xlarge: string
        xlargeheight: number
        xlargewidth: number
    },
    rank:number,
    subType:string,
    subtype:string,
    type:string,
    url:string,
    width:number

    // media_metadata:Array<MetadataType>
}
export type InnerSomeData={
    abstract: string
    adx_keywords: string
    asset_id: number
    byline: string
    column: null|string
    des_facet:Array<string>
    eta_id: number
    geo_facet:Array<string>
    id: number,
    lead_paragraph:string,
    published_date:string,
    multimedia:Array<InnerMediaData>
    nytdsection: string
    org_facet: Array<string>
    per_facet: Array<string>
    pub_date:string
    section: string,

    source: string
    subsection: string
    title: string
    snippet:string
    type: string
    updated: string
    uri: string
    url: string
}
export type SomeDataType={
    data:Array<InnerSomeData>
    show?:boolean
}

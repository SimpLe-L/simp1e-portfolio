export interface SocialHandle {
    platform: string;
    url: string;
    image: Image;
    enabled: boolean;
    _id: string;
}
export interface Image {
    public_id: string;
    url: string;
}
export interface About {
    name: string;
    title: string;
    subTitle: string;
    description: string;
    quote: string;
    exp_year: string;
    address: string;
    some_total: string;
    phoneNumber: string;
    avatar: Avatar;
    alternateAvatars: any[];
}
export interface Avatar {
    public_id: string;
    url: string;
}
export interface IAbout {
    name: string;
    title: string;
    subTitle: string;
    description: string;
    quote: string;
    exp_year: string;
    address: string;
    some_total: string;
    phoneNumber: string;
    avatar: Avatar;
    alternateAvatars: any[];
}

export interface IMenuItem {
    path: string;
    title: string;
}

export interface IMenu {
    menuName: string;
    list: IMenuItem[]
}

export interface INftProperties {
    owner: `0x${string}`;
    tokenId: bigint;
    level: number;
    faId: bigint;
    moId: bigint;
    uri: string;
}

export interface IMarketItem {
    seller: `0x${string}`;
    tokenId: bigint;
    index: bigint;
    price: bigint;
    uri: string;
    active: boolean;
}


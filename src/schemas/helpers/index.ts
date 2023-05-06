export interface IGetDateForClientOptions {
    withTime?: boolean;
    withSeconds?: boolean;
}

export interface IManageList<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

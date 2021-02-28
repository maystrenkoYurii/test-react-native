export type Values<T> = T[keyof T];

export type Callback = (...args: unknown[]) => void;

export type Nullable<T = unknown> = T | undefined | null;

export type PickValues<T, K extends keyof T> = Values<Pick<T, K>>;

export type ReturnThenType<T> = T extends PromiseLike<infer U> ? U : T;

export type ExtractResponse<T extends (...arg: never[]) => unknown> = ReturnThenType<ReturnType<T>>;

export type UnknownObject<T = unknown> = Record<string | number, T>;

export type NumberObject = UnknownObject<number>;

export type Selector<S, R> = (state: S) => R;

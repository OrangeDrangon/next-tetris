/**
 * A basic utility type that allows for easily defining n length tuples.
 *
 * @typeparam TItem Any object to fill the type of the tuple with
 * @typeparam TLength Length of the tuple type to create
 */
export type Tuple<TItem, TLength extends number> = [TItem, ...TItem[]] & {
  length: TLength;
};

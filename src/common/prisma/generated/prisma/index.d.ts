
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Articles
 * 
 */
export type Articles = $Result.DefaultSelection<Prisma.$ArticlesPayload>
/**
 * Model Foods
 * 
 */
export type Foods = $Result.DefaultSelection<Prisma.$FoodsPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model TABLE_TEMPLATE
 * 
 */
export type TABLE_TEMPLATE = $Result.DefaultSelection<Prisma.$TABLE_TEMPLATEPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Articles
 * const articles = await prisma.articles.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Articles
   * const articles = await prisma.articles.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.articles`: Exposes CRUD operations for the **Articles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.articles.findMany()
    * ```
    */
  get articles(): Prisma.ArticlesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foods`: Exposes CRUD operations for the **Foods** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Foods
    * const foods = await prisma.foods.findMany()
    * ```
    */
  get foods(): Prisma.FoodsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tABLE_TEMPLATE`: Exposes CRUD operations for the **TABLE_TEMPLATE** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TABLE_TEMPLATES
    * const tABLE_TEMPLATES = await prisma.tABLE_TEMPLATE.findMany()
    * ```
    */
  get tABLE_TEMPLATE(): Prisma.TABLE_TEMPLATEDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.1
   * Query Engine version: f09f2815f091dbba658cdcd2264306d88bb5bda6
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Articles: 'Articles',
    Foods: 'Foods',
    Orders: 'Orders',
    TABLE_TEMPLATE: 'TABLE_TEMPLATE',
    Users: 'Users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "articles" | "foods" | "orders" | "tABLE_TEMPLATE" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Articles: {
        payload: Prisma.$ArticlesPayload<ExtArgs>
        fields: Prisma.ArticlesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticlesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticlesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          findFirst: {
            args: Prisma.ArticlesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticlesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          findMany: {
            args: Prisma.ArticlesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>[]
          }
          create: {
            args: Prisma.ArticlesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          createMany: {
            args: Prisma.ArticlesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArticlesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          update: {
            args: Prisma.ArticlesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          deleteMany: {
            args: Prisma.ArticlesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticlesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArticlesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          aggregate: {
            args: Prisma.ArticlesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticles>
          }
          groupBy: {
            args: Prisma.ArticlesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticlesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticlesCountArgs<ExtArgs>
            result: $Utils.Optional<ArticlesCountAggregateOutputType> | number
          }
        }
      }
      Foods: {
        payload: Prisma.$FoodsPayload<ExtArgs>
        fields: Prisma.FoodsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>
          }
          findFirst: {
            args: Prisma.FoodsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>
          }
          findMany: {
            args: Prisma.FoodsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>[]
          }
          create: {
            args: Prisma.FoodsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>
          }
          createMany: {
            args: Prisma.FoodsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FoodsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>
          }
          update: {
            args: Prisma.FoodsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>
          }
          deleteMany: {
            args: Prisma.FoodsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FoodsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodsPayload>
          }
          aggregate: {
            args: Prisma.FoodsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoods>
          }
          groupBy: {
            args: Prisma.FoodsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodsCountArgs<ExtArgs>
            result: $Utils.Optional<FoodsCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      TABLE_TEMPLATE: {
        payload: Prisma.$TABLE_TEMPLATEPayload<ExtArgs>
        fields: Prisma.TABLE_TEMPLATEFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TABLE_TEMPLATEFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TABLE_TEMPLATEPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TABLE_TEMPLATEFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TABLE_TEMPLATEPayload>
          }
          findFirst: {
            args: Prisma.TABLE_TEMPLATEFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TABLE_TEMPLATEPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TABLE_TEMPLATEFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TABLE_TEMPLATEPayload>
          }
          findMany: {
            args: Prisma.TABLE_TEMPLATEFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TABLE_TEMPLATEPayload>[]
          }
          create: {
            args: Prisma.TABLE_TEMPLATECreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TABLE_TEMPLATEPayload>
          }
          createMany: {
            args: Prisma.TABLE_TEMPLATECreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TABLE_TEMPLATEDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TABLE_TEMPLATEPayload>
          }
          update: {
            args: Prisma.TABLE_TEMPLATEUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TABLE_TEMPLATEPayload>
          }
          deleteMany: {
            args: Prisma.TABLE_TEMPLATEDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TABLE_TEMPLATEUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TABLE_TEMPLATEUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TABLE_TEMPLATEPayload>
          }
          aggregate: {
            args: Prisma.TABLE_TEMPLATEAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTABLE_TEMPLATE>
          }
          groupBy: {
            args: Prisma.TABLE_TEMPLATEGroupByArgs<ExtArgs>
            result: $Utils.Optional<TABLE_TEMPLATEGroupByOutputType>[]
          }
          count: {
            args: Prisma.TABLE_TEMPLATECountArgs<ExtArgs>
            result: $Utils.Optional<TABLE_TEMPLATECountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    articles?: ArticlesOmit
    foods?: FoodsOmit
    orders?: OrdersOmit
    tABLE_TEMPLATE?: TABLE_TEMPLATEOmit
    users?: UsersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FoodsCountOutputType
   */

  export type FoodsCountOutputType = {
    Orders: number
  }

  export type FoodsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Orders?: boolean | FoodsCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * FoodsCountOutputType without action
   */
  export type FoodsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodsCountOutputType
     */
    select?: FoodsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodsCountOutputType without action
   */
  export type FoodsCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Articles: number
    Orders: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Articles?: boolean | UsersCountOutputTypeCountArticlesArgs
    Orders?: boolean | UsersCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticlesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Articles
   */

  export type AggregateArticles = {
    _count: ArticlesCountAggregateOutputType | null
    _avg: ArticlesAvgAggregateOutputType | null
    _sum: ArticlesSumAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  export type ArticlesAvgAggregateOutputType = {
    id: number | null
    views: number | null
    userId: number | null
  }

  export type ArticlesSumAggregateOutputType = {
    id: number | null
    views: number | null
    userId: number | null
  }

  export type ArticlesMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    imageUrl: string | null
    views: number | null
    userId: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticlesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    imageUrl: string | null
    views: number | null
    userId: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticlesCountAggregateOutputType = {
    id: number
    title: number
    content: number
    imageUrl: number
    views: number
    userId: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticlesAvgAggregateInputType = {
    id?: true
    views?: true
    userId?: true
  }

  export type ArticlesSumAggregateInputType = {
    id?: true
    views?: true
    userId?: true
  }

  export type ArticlesMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    views?: true
    userId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticlesMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    views?: true
    userId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticlesCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    views?: true
    userId?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticlesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to aggregate.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticlesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticlesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticlesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticlesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticlesMaxAggregateInputType
  }

  export type GetArticlesAggregateType<T extends ArticlesAggregateArgs> = {
        [P in keyof T & keyof AggregateArticles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticles[P]>
      : GetScalarType<T[P], AggregateArticles[P]>
  }




  export type ArticlesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticlesWhereInput
    orderBy?: ArticlesOrderByWithAggregationInput | ArticlesOrderByWithAggregationInput[]
    by: ArticlesScalarFieldEnum[] | ArticlesScalarFieldEnum
    having?: ArticlesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticlesCountAggregateInputType | true
    _avg?: ArticlesAvgAggregateInputType
    _sum?: ArticlesSumAggregateInputType
    _min?: ArticlesMinAggregateInputType
    _max?: ArticlesMaxAggregateInputType
  }

  export type ArticlesGroupByOutputType = {
    id: number
    title: string | null
    content: string | null
    imageUrl: string | null
    views: number
    userId: number
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: ArticlesCountAggregateOutputType | null
    _avg: ArticlesAvgAggregateOutputType | null
    _sum: ArticlesSumAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  type GetArticlesGroupByPayload<T extends ArticlesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticlesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticlesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
            : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
        }
      >
    >


  export type ArticlesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    views?: boolean
    userId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articles"]>



  export type ArticlesSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    views?: boolean
    userId?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArticlesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "imageUrl" | "views" | "userId" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["articles"]>
  export type ArticlesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $ArticlesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Articles"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      content: string | null
      imageUrl: string | null
      views: number
      userId: number
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["articles"]>
    composites: {}
  }

  type ArticlesGetPayload<S extends boolean | null | undefined | ArticlesDefaultArgs> = $Result.GetResult<Prisma.$ArticlesPayload, S>

  type ArticlesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticlesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticlesCountAggregateInputType | true
    }

  export interface ArticlesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Articles'], meta: { name: 'Articles' } }
    /**
     * Find zero or one Articles that matches the filter.
     * @param {ArticlesFindUniqueArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticlesFindUniqueArgs>(args: SelectSubset<T, ArticlesFindUniqueArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Articles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticlesFindUniqueOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticlesFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticlesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesFindFirstArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticlesFindFirstArgs>(args?: SelectSubset<T, ArticlesFindFirstArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesFindFirstOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticlesFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticlesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.articles.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.articles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articlesWithIdOnly = await prisma.articles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticlesFindManyArgs>(args?: SelectSubset<T, ArticlesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Articles.
     * @param {ArticlesCreateArgs} args - Arguments to create a Articles.
     * @example
     * // Create one Articles
     * const Articles = await prisma.articles.create({
     *   data: {
     *     // ... data to create a Articles
     *   }
     * })
     * 
     */
    create<T extends ArticlesCreateArgs>(args: SelectSubset<T, ArticlesCreateArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {ArticlesCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const articles = await prisma.articles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticlesCreateManyArgs>(args?: SelectSubset<T, ArticlesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Articles.
     * @param {ArticlesDeleteArgs} args - Arguments to delete one Articles.
     * @example
     * // Delete one Articles
     * const Articles = await prisma.articles.delete({
     *   where: {
     *     // ... filter to delete one Articles
     *   }
     * })
     * 
     */
    delete<T extends ArticlesDeleteArgs>(args: SelectSubset<T, ArticlesDeleteArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Articles.
     * @param {ArticlesUpdateArgs} args - Arguments to update one Articles.
     * @example
     * // Update one Articles
     * const articles = await prisma.articles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticlesUpdateArgs>(args: SelectSubset<T, ArticlesUpdateArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {ArticlesDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.articles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticlesDeleteManyArgs>(args?: SelectSubset<T, ArticlesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const articles = await prisma.articles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticlesUpdateManyArgs>(args: SelectSubset<T, ArticlesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Articles.
     * @param {ArticlesUpsertArgs} args - Arguments to update or create a Articles.
     * @example
     * // Update or create a Articles
     * const articles = await prisma.articles.upsert({
     *   create: {
     *     // ... data to create a Articles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Articles we want to update
     *   }
     * })
     */
    upsert<T extends ArticlesUpsertArgs>(args: SelectSubset<T, ArticlesUpsertArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.articles.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticlesCountArgs>(
      args?: Subset<T, ArticlesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticlesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticlesAggregateArgs>(args: Subset<T, ArticlesAggregateArgs>): Prisma.PrismaPromise<GetArticlesAggregateType<T>>

    /**
     * Group by Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticlesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticlesGroupByArgs['orderBy'] }
        : { orderBy?: ArticlesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticlesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticlesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Articles model
   */
  readonly fields: ArticlesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Articles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticlesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Articles model
   */
  interface ArticlesFieldRefs {
    readonly id: FieldRef<"Articles", 'Int'>
    readonly title: FieldRef<"Articles", 'String'>
    readonly content: FieldRef<"Articles", 'String'>
    readonly imageUrl: FieldRef<"Articles", 'String'>
    readonly views: FieldRef<"Articles", 'Int'>
    readonly userId: FieldRef<"Articles", 'Int'>
    readonly isDeleted: FieldRef<"Articles", 'Boolean'>
    readonly createdAt: FieldRef<"Articles", 'DateTime'>
    readonly updatedAt: FieldRef<"Articles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Articles findUnique
   */
  export type ArticlesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where: ArticlesWhereUniqueInput
  }

  /**
   * Articles findUniqueOrThrow
   */
  export type ArticlesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where: ArticlesWhereUniqueInput
  }

  /**
   * Articles findFirst
   */
  export type ArticlesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * Articles findFirstOrThrow
   */
  export type ArticlesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * Articles findMany
   */
  export type ArticlesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * Articles create
   */
  export type ArticlesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * The data needed to create a Articles.
     */
    data: XOR<ArticlesCreateInput, ArticlesUncheckedCreateInput>
  }

  /**
   * Articles createMany
   */
  export type ArticlesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticlesCreateManyInput | ArticlesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Articles update
   */
  export type ArticlesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * The data needed to update a Articles.
     */
    data: XOR<ArticlesUpdateInput, ArticlesUncheckedUpdateInput>
    /**
     * Choose, which Articles to update.
     */
    where: ArticlesWhereUniqueInput
  }

  /**
   * Articles updateMany
   */
  export type ArticlesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticlesUpdateManyMutationInput, ArticlesUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticlesWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Articles upsert
   */
  export type ArticlesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * The filter to search for the Articles to update in case it exists.
     */
    where: ArticlesWhereUniqueInput
    /**
     * In case the Articles found by the `where` argument doesn't exist, create a new Articles with this data.
     */
    create: XOR<ArticlesCreateInput, ArticlesUncheckedCreateInput>
    /**
     * In case the Articles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticlesUpdateInput, ArticlesUncheckedUpdateInput>
  }

  /**
   * Articles delete
   */
  export type ArticlesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter which Articles to delete.
     */
    where: ArticlesWhereUniqueInput
  }

  /**
   * Articles deleteMany
   */
  export type ArticlesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticlesWhereInput
    /**
     * Limit how many Articles to delete.
     */
    limit?: number
  }

  /**
   * Articles without action
   */
  export type ArticlesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
  }


  /**
   * Model Foods
   */

  export type AggregateFoods = {
    _count: FoodsCountAggregateOutputType | null
    _avg: FoodsAvgAggregateOutputType | null
    _sum: FoodsSumAggregateOutputType | null
    _min: FoodsMinAggregateOutputType | null
    _max: FoodsMaxAggregateOutputType | null
  }

  export type FoodsAvgAggregateOutputType = {
    food_id: number | null
  }

  export type FoodsSumAggregateOutputType = {
    food_id: number | null
  }

  export type FoodsMinAggregateOutputType = {
    food_id: number | null
    name: string | null
    description: string | null
  }

  export type FoodsMaxAggregateOutputType = {
    food_id: number | null
    name: string | null
    description: string | null
  }

  export type FoodsCountAggregateOutputType = {
    food_id: number
    name: number
    description: number
    _all: number
  }


  export type FoodsAvgAggregateInputType = {
    food_id?: true
  }

  export type FoodsSumAggregateInputType = {
    food_id?: true
  }

  export type FoodsMinAggregateInputType = {
    food_id?: true
    name?: true
    description?: true
  }

  export type FoodsMaxAggregateInputType = {
    food_id?: true
    name?: true
    description?: true
  }

  export type FoodsCountAggregateInputType = {
    food_id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type FoodsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foods to aggregate.
     */
    where?: FoodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodsOrderByWithRelationInput | FoodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Foods
    **/
    _count?: true | FoodsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodsMaxAggregateInputType
  }

  export type GetFoodsAggregateType<T extends FoodsAggregateArgs> = {
        [P in keyof T & keyof AggregateFoods]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoods[P]>
      : GetScalarType<T[P], AggregateFoods[P]>
  }




  export type FoodsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodsWhereInput
    orderBy?: FoodsOrderByWithAggregationInput | FoodsOrderByWithAggregationInput[]
    by: FoodsScalarFieldEnum[] | FoodsScalarFieldEnum
    having?: FoodsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodsCountAggregateInputType | true
    _avg?: FoodsAvgAggregateInputType
    _sum?: FoodsSumAggregateInputType
    _min?: FoodsMinAggregateInputType
    _max?: FoodsMaxAggregateInputType
  }

  export type FoodsGroupByOutputType = {
    food_id: number
    name: string | null
    description: string | null
    _count: FoodsCountAggregateOutputType | null
    _avg: FoodsAvgAggregateOutputType | null
    _sum: FoodsSumAggregateOutputType | null
    _min: FoodsMinAggregateOutputType | null
    _max: FoodsMaxAggregateOutputType | null
  }

  type GetFoodsGroupByPayload<T extends FoodsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodsGroupByOutputType[P]>
            : GetScalarType<T[P], FoodsGroupByOutputType[P]>
        }
      >
    >


  export type FoodsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    food_id?: boolean
    name?: boolean
    description?: boolean
    Orders?: boolean | Foods$OrdersArgs<ExtArgs>
    _count?: boolean | FoodsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foods"]>



  export type FoodsSelectScalar = {
    food_id?: boolean
    name?: boolean
    description?: boolean
  }

  export type FoodsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"food_id" | "name" | "description", ExtArgs["result"]["foods"]>
  export type FoodsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Orders?: boolean | Foods$OrdersArgs<ExtArgs>
    _count?: boolean | FoodsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FoodsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Foods"
    objects: {
      Orders: Prisma.$OrdersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      food_id: number
      name: string | null
      description: string | null
    }, ExtArgs["result"]["foods"]>
    composites: {}
  }

  type FoodsGetPayload<S extends boolean | null | undefined | FoodsDefaultArgs> = $Result.GetResult<Prisma.$FoodsPayload, S>

  type FoodsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodsCountAggregateInputType | true
    }

  export interface FoodsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Foods'], meta: { name: 'Foods' } }
    /**
     * Find zero or one Foods that matches the filter.
     * @param {FoodsFindUniqueArgs} args - Arguments to find a Foods
     * @example
     * // Get one Foods
     * const foods = await prisma.foods.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodsFindUniqueArgs>(args: SelectSubset<T, FoodsFindUniqueArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Foods that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodsFindUniqueOrThrowArgs} args - Arguments to find a Foods
     * @example
     * // Get one Foods
     * const foods = await prisma.foods.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodsFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsFindFirstArgs} args - Arguments to find a Foods
     * @example
     * // Get one Foods
     * const foods = await prisma.foods.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodsFindFirstArgs>(args?: SelectSubset<T, FoodsFindFirstArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Foods that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsFindFirstOrThrowArgs} args - Arguments to find a Foods
     * @example
     * // Get one Foods
     * const foods = await prisma.foods.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodsFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Foods
     * const foods = await prisma.foods.findMany()
     * 
     * // Get first 10 Foods
     * const foods = await prisma.foods.findMany({ take: 10 })
     * 
     * // Only select the `food_id`
     * const foodsWithFood_idOnly = await prisma.foods.findMany({ select: { food_id: true } })
     * 
     */
    findMany<T extends FoodsFindManyArgs>(args?: SelectSubset<T, FoodsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Foods.
     * @param {FoodsCreateArgs} args - Arguments to create a Foods.
     * @example
     * // Create one Foods
     * const Foods = await prisma.foods.create({
     *   data: {
     *     // ... data to create a Foods
     *   }
     * })
     * 
     */
    create<T extends FoodsCreateArgs>(args: SelectSubset<T, FoodsCreateArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Foods.
     * @param {FoodsCreateManyArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const foods = await prisma.foods.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodsCreateManyArgs>(args?: SelectSubset<T, FoodsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Foods.
     * @param {FoodsDeleteArgs} args - Arguments to delete one Foods.
     * @example
     * // Delete one Foods
     * const Foods = await prisma.foods.delete({
     *   where: {
     *     // ... filter to delete one Foods
     *   }
     * })
     * 
     */
    delete<T extends FoodsDeleteArgs>(args: SelectSubset<T, FoodsDeleteArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Foods.
     * @param {FoodsUpdateArgs} args - Arguments to update one Foods.
     * @example
     * // Update one Foods
     * const foods = await prisma.foods.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodsUpdateArgs>(args: SelectSubset<T, FoodsUpdateArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Foods.
     * @param {FoodsDeleteManyArgs} args - Arguments to filter Foods to delete.
     * @example
     * // Delete a few Foods
     * const { count } = await prisma.foods.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodsDeleteManyArgs>(args?: SelectSubset<T, FoodsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Foods
     * const foods = await prisma.foods.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodsUpdateManyArgs>(args: SelectSubset<T, FoodsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Foods.
     * @param {FoodsUpsertArgs} args - Arguments to update or create a Foods.
     * @example
     * // Update or create a Foods
     * const foods = await prisma.foods.upsert({
     *   create: {
     *     // ... data to create a Foods
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Foods we want to update
     *   }
     * })
     */
    upsert<T extends FoodsUpsertArgs>(args: SelectSubset<T, FoodsUpsertArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsCountArgs} args - Arguments to filter Foods to count.
     * @example
     * // Count the number of Foods
     * const count = await prisma.foods.count({
     *   where: {
     *     // ... the filter for the Foods we want to count
     *   }
     * })
    **/
    count<T extends FoodsCountArgs>(
      args?: Subset<T, FoodsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodsAggregateArgs>(args: Subset<T, FoodsAggregateArgs>): Prisma.PrismaPromise<GetFoodsAggregateType<T>>

    /**
     * Group by Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoodsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodsGroupByArgs['orderBy'] }
        : { orderBy?: FoodsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoodsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Foods model
   */
  readonly fields: FoodsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Foods.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Orders<T extends Foods$OrdersArgs<ExtArgs> = {}>(args?: Subset<T, Foods$OrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Foods model
   */
  interface FoodsFieldRefs {
    readonly food_id: FieldRef<"Foods", 'Int'>
    readonly name: FieldRef<"Foods", 'String'>
    readonly description: FieldRef<"Foods", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Foods findUnique
   */
  export type FoodsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where: FoodsWhereUniqueInput
  }

  /**
   * Foods findUniqueOrThrow
   */
  export type FoodsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where: FoodsWhereUniqueInput
  }

  /**
   * Foods findFirst
   */
  export type FoodsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodsOrderByWithRelationInput | FoodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodsScalarFieldEnum | FoodsScalarFieldEnum[]
  }

  /**
   * Foods findFirstOrThrow
   */
  export type FoodsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodsOrderByWithRelationInput | FoodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodsScalarFieldEnum | FoodsScalarFieldEnum[]
  }

  /**
   * Foods findMany
   */
  export type FoodsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodsOrderByWithRelationInput | FoodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Foods.
     */
    cursor?: FoodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    distinct?: FoodsScalarFieldEnum | FoodsScalarFieldEnum[]
  }

  /**
   * Foods create
   */
  export type FoodsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * The data needed to create a Foods.
     */
    data?: XOR<FoodsCreateInput, FoodsUncheckedCreateInput>
  }

  /**
   * Foods createMany
   */
  export type FoodsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Foods.
     */
    data: FoodsCreateManyInput | FoodsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Foods update
   */
  export type FoodsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * The data needed to update a Foods.
     */
    data: XOR<FoodsUpdateInput, FoodsUncheckedUpdateInput>
    /**
     * Choose, which Foods to update.
     */
    where: FoodsWhereUniqueInput
  }

  /**
   * Foods updateMany
   */
  export type FoodsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodsUpdateManyMutationInput, FoodsUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodsWhereInput
    /**
     * Limit how many Foods to update.
     */
    limit?: number
  }

  /**
   * Foods upsert
   */
  export type FoodsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * The filter to search for the Foods to update in case it exists.
     */
    where: FoodsWhereUniqueInput
    /**
     * In case the Foods found by the `where` argument doesn't exist, create a new Foods with this data.
     */
    create: XOR<FoodsCreateInput, FoodsUncheckedCreateInput>
    /**
     * In case the Foods was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodsUpdateInput, FoodsUncheckedUpdateInput>
  }

  /**
   * Foods delete
   */
  export type FoodsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    /**
     * Filter which Foods to delete.
     */
    where: FoodsWhereUniqueInput
  }

  /**
   * Foods deleteMany
   */
  export type FoodsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foods to delete
     */
    where?: FoodsWhereInput
    /**
     * Limit how many Foods to delete.
     */
    limit?: number
  }

  /**
   * Foods.Orders
   */
  export type Foods$OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Foods without action
   */
  export type FoodsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    foodId: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    userId: number | null
    foodId: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    userId: number | null
    foodId: number | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    foodId: number | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    userId: number
    foodId: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    userId?: true
    foodId?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    userId: number | null
    foodId: number | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    foodId?: boolean
    Users?: boolean | Orders$UsersArgs<ExtArgs>
    Foods?: boolean | Orders$FoodsArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>



  export type OrdersSelectScalar = {
    id?: boolean
    userId?: boolean
    foodId?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "foodId", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Orders$UsersArgs<ExtArgs>
    Foods?: boolean | Orders$FoodsArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs> | null
      Foods: Prisma.$FoodsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      foodId: number | null
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends Orders$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Orders$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Foods<T extends Orders$FoodsArgs<ExtArgs> = {}>(args?: Subset<T, Orders$FoodsArgs<ExtArgs>>): Prisma__FoodsClient<$Result.GetResult<Prisma.$FoodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'Int'>
    readonly userId: FieldRef<"Orders", 'Int'>
    readonly foodId: FieldRef<"Orders", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data?: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders.Users
   */
  export type Orders$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Orders.Foods
   */
  export type Orders$FoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Foods
     */
    select?: FoodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Foods
     */
    omit?: FoodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodsInclude<ExtArgs> | null
    where?: FoodsWhereInput
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model TABLE_TEMPLATE
   */

  export type AggregateTABLE_TEMPLATE = {
    _count: TABLE_TEMPLATECountAggregateOutputType | null
    _avg: TABLE_TEMPLATEAvgAggregateOutputType | null
    _sum: TABLE_TEMPLATESumAggregateOutputType | null
    _min: TABLE_TEMPLATEMinAggregateOutputType | null
    _max: TABLE_TEMPLATEMaxAggregateOutputType | null
  }

  export type TABLE_TEMPLATEAvgAggregateOutputType = {
    id: number | null
  }

  export type TABLE_TEMPLATESumAggregateOutputType = {
    id: number | null
  }

  export type TABLE_TEMPLATEMinAggregateOutputType = {
    id: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TABLE_TEMPLATEMaxAggregateOutputType = {
    id: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TABLE_TEMPLATECountAggregateOutputType = {
    id: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TABLE_TEMPLATEAvgAggregateInputType = {
    id?: true
  }

  export type TABLE_TEMPLATESumAggregateInputType = {
    id?: true
  }

  export type TABLE_TEMPLATEMinAggregateInputType = {
    id?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TABLE_TEMPLATEMaxAggregateInputType = {
    id?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TABLE_TEMPLATECountAggregateInputType = {
    id?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TABLE_TEMPLATEAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TABLE_TEMPLATE to aggregate.
     */
    where?: TABLE_TEMPLATEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TABLE_TEMPLATES to fetch.
     */
    orderBy?: TABLE_TEMPLATEOrderByWithRelationInput | TABLE_TEMPLATEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TABLE_TEMPLATEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TABLE_TEMPLATES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TABLE_TEMPLATES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TABLE_TEMPLATES
    **/
    _count?: true | TABLE_TEMPLATECountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TABLE_TEMPLATEAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TABLE_TEMPLATESumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TABLE_TEMPLATEMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TABLE_TEMPLATEMaxAggregateInputType
  }

  export type GetTABLE_TEMPLATEAggregateType<T extends TABLE_TEMPLATEAggregateArgs> = {
        [P in keyof T & keyof AggregateTABLE_TEMPLATE]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTABLE_TEMPLATE[P]>
      : GetScalarType<T[P], AggregateTABLE_TEMPLATE[P]>
  }




  export type TABLE_TEMPLATEGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TABLE_TEMPLATEWhereInput
    orderBy?: TABLE_TEMPLATEOrderByWithAggregationInput | TABLE_TEMPLATEOrderByWithAggregationInput[]
    by: TABLE_TEMPLATEScalarFieldEnum[] | TABLE_TEMPLATEScalarFieldEnum
    having?: TABLE_TEMPLATEScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TABLE_TEMPLATECountAggregateInputType | true
    _avg?: TABLE_TEMPLATEAvgAggregateInputType
    _sum?: TABLE_TEMPLATESumAggregateInputType
    _min?: TABLE_TEMPLATEMinAggregateInputType
    _max?: TABLE_TEMPLATEMaxAggregateInputType
  }

  export type TABLE_TEMPLATEGroupByOutputType = {
    id: number
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: TABLE_TEMPLATECountAggregateOutputType | null
    _avg: TABLE_TEMPLATEAvgAggregateOutputType | null
    _sum: TABLE_TEMPLATESumAggregateOutputType | null
    _min: TABLE_TEMPLATEMinAggregateOutputType | null
    _max: TABLE_TEMPLATEMaxAggregateOutputType | null
  }

  type GetTABLE_TEMPLATEGroupByPayload<T extends TABLE_TEMPLATEGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TABLE_TEMPLATEGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TABLE_TEMPLATEGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TABLE_TEMPLATEGroupByOutputType[P]>
            : GetScalarType<T[P], TABLE_TEMPLATEGroupByOutputType[P]>
        }
      >
    >


  export type TABLE_TEMPLATESelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tABLE_TEMPLATE"]>



  export type TABLE_TEMPLATESelectScalar = {
    id?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TABLE_TEMPLATEOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["tABLE_TEMPLATE"]>

  export type $TABLE_TEMPLATEPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TABLE_TEMPLATE"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tABLE_TEMPLATE"]>
    composites: {}
  }

  type TABLE_TEMPLATEGetPayload<S extends boolean | null | undefined | TABLE_TEMPLATEDefaultArgs> = $Result.GetResult<Prisma.$TABLE_TEMPLATEPayload, S>

  type TABLE_TEMPLATECountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TABLE_TEMPLATEFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TABLE_TEMPLATECountAggregateInputType | true
    }

  export interface TABLE_TEMPLATEDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TABLE_TEMPLATE'], meta: { name: 'TABLE_TEMPLATE' } }
    /**
     * Find zero or one TABLE_TEMPLATE that matches the filter.
     * @param {TABLE_TEMPLATEFindUniqueArgs} args - Arguments to find a TABLE_TEMPLATE
     * @example
     * // Get one TABLE_TEMPLATE
     * const tABLE_TEMPLATE = await prisma.tABLE_TEMPLATE.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TABLE_TEMPLATEFindUniqueArgs>(args: SelectSubset<T, TABLE_TEMPLATEFindUniqueArgs<ExtArgs>>): Prisma__TABLE_TEMPLATEClient<$Result.GetResult<Prisma.$TABLE_TEMPLATEPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TABLE_TEMPLATE that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TABLE_TEMPLATEFindUniqueOrThrowArgs} args - Arguments to find a TABLE_TEMPLATE
     * @example
     * // Get one TABLE_TEMPLATE
     * const tABLE_TEMPLATE = await prisma.tABLE_TEMPLATE.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TABLE_TEMPLATEFindUniqueOrThrowArgs>(args: SelectSubset<T, TABLE_TEMPLATEFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TABLE_TEMPLATEClient<$Result.GetResult<Prisma.$TABLE_TEMPLATEPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TABLE_TEMPLATE that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TABLE_TEMPLATEFindFirstArgs} args - Arguments to find a TABLE_TEMPLATE
     * @example
     * // Get one TABLE_TEMPLATE
     * const tABLE_TEMPLATE = await prisma.tABLE_TEMPLATE.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TABLE_TEMPLATEFindFirstArgs>(args?: SelectSubset<T, TABLE_TEMPLATEFindFirstArgs<ExtArgs>>): Prisma__TABLE_TEMPLATEClient<$Result.GetResult<Prisma.$TABLE_TEMPLATEPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TABLE_TEMPLATE that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TABLE_TEMPLATEFindFirstOrThrowArgs} args - Arguments to find a TABLE_TEMPLATE
     * @example
     * // Get one TABLE_TEMPLATE
     * const tABLE_TEMPLATE = await prisma.tABLE_TEMPLATE.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TABLE_TEMPLATEFindFirstOrThrowArgs>(args?: SelectSubset<T, TABLE_TEMPLATEFindFirstOrThrowArgs<ExtArgs>>): Prisma__TABLE_TEMPLATEClient<$Result.GetResult<Prisma.$TABLE_TEMPLATEPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TABLE_TEMPLATES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TABLE_TEMPLATEFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TABLE_TEMPLATES
     * const tABLE_TEMPLATES = await prisma.tABLE_TEMPLATE.findMany()
     * 
     * // Get first 10 TABLE_TEMPLATES
     * const tABLE_TEMPLATES = await prisma.tABLE_TEMPLATE.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tABLE_TEMPLATEWithIdOnly = await prisma.tABLE_TEMPLATE.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TABLE_TEMPLATEFindManyArgs>(args?: SelectSubset<T, TABLE_TEMPLATEFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TABLE_TEMPLATEPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TABLE_TEMPLATE.
     * @param {TABLE_TEMPLATECreateArgs} args - Arguments to create a TABLE_TEMPLATE.
     * @example
     * // Create one TABLE_TEMPLATE
     * const TABLE_TEMPLATE = await prisma.tABLE_TEMPLATE.create({
     *   data: {
     *     // ... data to create a TABLE_TEMPLATE
     *   }
     * })
     * 
     */
    create<T extends TABLE_TEMPLATECreateArgs>(args: SelectSubset<T, TABLE_TEMPLATECreateArgs<ExtArgs>>): Prisma__TABLE_TEMPLATEClient<$Result.GetResult<Prisma.$TABLE_TEMPLATEPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TABLE_TEMPLATES.
     * @param {TABLE_TEMPLATECreateManyArgs} args - Arguments to create many TABLE_TEMPLATES.
     * @example
     * // Create many TABLE_TEMPLATES
     * const tABLE_TEMPLATE = await prisma.tABLE_TEMPLATE.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TABLE_TEMPLATECreateManyArgs>(args?: SelectSubset<T, TABLE_TEMPLATECreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TABLE_TEMPLATE.
     * @param {TABLE_TEMPLATEDeleteArgs} args - Arguments to delete one TABLE_TEMPLATE.
     * @example
     * // Delete one TABLE_TEMPLATE
     * const TABLE_TEMPLATE = await prisma.tABLE_TEMPLATE.delete({
     *   where: {
     *     // ... filter to delete one TABLE_TEMPLATE
     *   }
     * })
     * 
     */
    delete<T extends TABLE_TEMPLATEDeleteArgs>(args: SelectSubset<T, TABLE_TEMPLATEDeleteArgs<ExtArgs>>): Prisma__TABLE_TEMPLATEClient<$Result.GetResult<Prisma.$TABLE_TEMPLATEPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TABLE_TEMPLATE.
     * @param {TABLE_TEMPLATEUpdateArgs} args - Arguments to update one TABLE_TEMPLATE.
     * @example
     * // Update one TABLE_TEMPLATE
     * const tABLE_TEMPLATE = await prisma.tABLE_TEMPLATE.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TABLE_TEMPLATEUpdateArgs>(args: SelectSubset<T, TABLE_TEMPLATEUpdateArgs<ExtArgs>>): Prisma__TABLE_TEMPLATEClient<$Result.GetResult<Prisma.$TABLE_TEMPLATEPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TABLE_TEMPLATES.
     * @param {TABLE_TEMPLATEDeleteManyArgs} args - Arguments to filter TABLE_TEMPLATES to delete.
     * @example
     * // Delete a few TABLE_TEMPLATES
     * const { count } = await prisma.tABLE_TEMPLATE.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TABLE_TEMPLATEDeleteManyArgs>(args?: SelectSubset<T, TABLE_TEMPLATEDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TABLE_TEMPLATES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TABLE_TEMPLATEUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TABLE_TEMPLATES
     * const tABLE_TEMPLATE = await prisma.tABLE_TEMPLATE.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TABLE_TEMPLATEUpdateManyArgs>(args: SelectSubset<T, TABLE_TEMPLATEUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TABLE_TEMPLATE.
     * @param {TABLE_TEMPLATEUpsertArgs} args - Arguments to update or create a TABLE_TEMPLATE.
     * @example
     * // Update or create a TABLE_TEMPLATE
     * const tABLE_TEMPLATE = await prisma.tABLE_TEMPLATE.upsert({
     *   create: {
     *     // ... data to create a TABLE_TEMPLATE
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TABLE_TEMPLATE we want to update
     *   }
     * })
     */
    upsert<T extends TABLE_TEMPLATEUpsertArgs>(args: SelectSubset<T, TABLE_TEMPLATEUpsertArgs<ExtArgs>>): Prisma__TABLE_TEMPLATEClient<$Result.GetResult<Prisma.$TABLE_TEMPLATEPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TABLE_TEMPLATES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TABLE_TEMPLATECountArgs} args - Arguments to filter TABLE_TEMPLATES to count.
     * @example
     * // Count the number of TABLE_TEMPLATES
     * const count = await prisma.tABLE_TEMPLATE.count({
     *   where: {
     *     // ... the filter for the TABLE_TEMPLATES we want to count
     *   }
     * })
    **/
    count<T extends TABLE_TEMPLATECountArgs>(
      args?: Subset<T, TABLE_TEMPLATECountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TABLE_TEMPLATECountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TABLE_TEMPLATE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TABLE_TEMPLATEAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TABLE_TEMPLATEAggregateArgs>(args: Subset<T, TABLE_TEMPLATEAggregateArgs>): Prisma.PrismaPromise<GetTABLE_TEMPLATEAggregateType<T>>

    /**
     * Group by TABLE_TEMPLATE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TABLE_TEMPLATEGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TABLE_TEMPLATEGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TABLE_TEMPLATEGroupByArgs['orderBy'] }
        : { orderBy?: TABLE_TEMPLATEGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TABLE_TEMPLATEGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTABLE_TEMPLATEGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TABLE_TEMPLATE model
   */
  readonly fields: TABLE_TEMPLATEFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TABLE_TEMPLATE.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TABLE_TEMPLATEClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TABLE_TEMPLATE model
   */
  interface TABLE_TEMPLATEFieldRefs {
    readonly id: FieldRef<"TABLE_TEMPLATE", 'Int'>
    readonly isDeleted: FieldRef<"TABLE_TEMPLATE", 'Boolean'>
    readonly createdAt: FieldRef<"TABLE_TEMPLATE", 'DateTime'>
    readonly updatedAt: FieldRef<"TABLE_TEMPLATE", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TABLE_TEMPLATE findUnique
   */
  export type TABLE_TEMPLATEFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TABLE_TEMPLATE
     */
    select?: TABLE_TEMPLATESelect<ExtArgs> | null
    /**
     * Omit specific fields from the TABLE_TEMPLATE
     */
    omit?: TABLE_TEMPLATEOmit<ExtArgs> | null
    /**
     * Filter, which TABLE_TEMPLATE to fetch.
     */
    where: TABLE_TEMPLATEWhereUniqueInput
  }

  /**
   * TABLE_TEMPLATE findUniqueOrThrow
   */
  export type TABLE_TEMPLATEFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TABLE_TEMPLATE
     */
    select?: TABLE_TEMPLATESelect<ExtArgs> | null
    /**
     * Omit specific fields from the TABLE_TEMPLATE
     */
    omit?: TABLE_TEMPLATEOmit<ExtArgs> | null
    /**
     * Filter, which TABLE_TEMPLATE to fetch.
     */
    where: TABLE_TEMPLATEWhereUniqueInput
  }

  /**
   * TABLE_TEMPLATE findFirst
   */
  export type TABLE_TEMPLATEFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TABLE_TEMPLATE
     */
    select?: TABLE_TEMPLATESelect<ExtArgs> | null
    /**
     * Omit specific fields from the TABLE_TEMPLATE
     */
    omit?: TABLE_TEMPLATEOmit<ExtArgs> | null
    /**
     * Filter, which TABLE_TEMPLATE to fetch.
     */
    where?: TABLE_TEMPLATEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TABLE_TEMPLATES to fetch.
     */
    orderBy?: TABLE_TEMPLATEOrderByWithRelationInput | TABLE_TEMPLATEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TABLE_TEMPLATES.
     */
    cursor?: TABLE_TEMPLATEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TABLE_TEMPLATES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TABLE_TEMPLATES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TABLE_TEMPLATES.
     */
    distinct?: TABLE_TEMPLATEScalarFieldEnum | TABLE_TEMPLATEScalarFieldEnum[]
  }

  /**
   * TABLE_TEMPLATE findFirstOrThrow
   */
  export type TABLE_TEMPLATEFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TABLE_TEMPLATE
     */
    select?: TABLE_TEMPLATESelect<ExtArgs> | null
    /**
     * Omit specific fields from the TABLE_TEMPLATE
     */
    omit?: TABLE_TEMPLATEOmit<ExtArgs> | null
    /**
     * Filter, which TABLE_TEMPLATE to fetch.
     */
    where?: TABLE_TEMPLATEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TABLE_TEMPLATES to fetch.
     */
    orderBy?: TABLE_TEMPLATEOrderByWithRelationInput | TABLE_TEMPLATEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TABLE_TEMPLATES.
     */
    cursor?: TABLE_TEMPLATEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TABLE_TEMPLATES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TABLE_TEMPLATES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TABLE_TEMPLATES.
     */
    distinct?: TABLE_TEMPLATEScalarFieldEnum | TABLE_TEMPLATEScalarFieldEnum[]
  }

  /**
   * TABLE_TEMPLATE findMany
   */
  export type TABLE_TEMPLATEFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TABLE_TEMPLATE
     */
    select?: TABLE_TEMPLATESelect<ExtArgs> | null
    /**
     * Omit specific fields from the TABLE_TEMPLATE
     */
    omit?: TABLE_TEMPLATEOmit<ExtArgs> | null
    /**
     * Filter, which TABLE_TEMPLATES to fetch.
     */
    where?: TABLE_TEMPLATEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TABLE_TEMPLATES to fetch.
     */
    orderBy?: TABLE_TEMPLATEOrderByWithRelationInput | TABLE_TEMPLATEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TABLE_TEMPLATES.
     */
    cursor?: TABLE_TEMPLATEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TABLE_TEMPLATES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TABLE_TEMPLATES.
     */
    skip?: number
    distinct?: TABLE_TEMPLATEScalarFieldEnum | TABLE_TEMPLATEScalarFieldEnum[]
  }

  /**
   * TABLE_TEMPLATE create
   */
  export type TABLE_TEMPLATECreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TABLE_TEMPLATE
     */
    select?: TABLE_TEMPLATESelect<ExtArgs> | null
    /**
     * Omit specific fields from the TABLE_TEMPLATE
     */
    omit?: TABLE_TEMPLATEOmit<ExtArgs> | null
    /**
     * The data needed to create a TABLE_TEMPLATE.
     */
    data?: XOR<TABLE_TEMPLATECreateInput, TABLE_TEMPLATEUncheckedCreateInput>
  }

  /**
   * TABLE_TEMPLATE createMany
   */
  export type TABLE_TEMPLATECreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TABLE_TEMPLATES.
     */
    data: TABLE_TEMPLATECreateManyInput | TABLE_TEMPLATECreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TABLE_TEMPLATE update
   */
  export type TABLE_TEMPLATEUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TABLE_TEMPLATE
     */
    select?: TABLE_TEMPLATESelect<ExtArgs> | null
    /**
     * Omit specific fields from the TABLE_TEMPLATE
     */
    omit?: TABLE_TEMPLATEOmit<ExtArgs> | null
    /**
     * The data needed to update a TABLE_TEMPLATE.
     */
    data: XOR<TABLE_TEMPLATEUpdateInput, TABLE_TEMPLATEUncheckedUpdateInput>
    /**
     * Choose, which TABLE_TEMPLATE to update.
     */
    where: TABLE_TEMPLATEWhereUniqueInput
  }

  /**
   * TABLE_TEMPLATE updateMany
   */
  export type TABLE_TEMPLATEUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TABLE_TEMPLATES.
     */
    data: XOR<TABLE_TEMPLATEUpdateManyMutationInput, TABLE_TEMPLATEUncheckedUpdateManyInput>
    /**
     * Filter which TABLE_TEMPLATES to update
     */
    where?: TABLE_TEMPLATEWhereInput
    /**
     * Limit how many TABLE_TEMPLATES to update.
     */
    limit?: number
  }

  /**
   * TABLE_TEMPLATE upsert
   */
  export type TABLE_TEMPLATEUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TABLE_TEMPLATE
     */
    select?: TABLE_TEMPLATESelect<ExtArgs> | null
    /**
     * Omit specific fields from the TABLE_TEMPLATE
     */
    omit?: TABLE_TEMPLATEOmit<ExtArgs> | null
    /**
     * The filter to search for the TABLE_TEMPLATE to update in case it exists.
     */
    where: TABLE_TEMPLATEWhereUniqueInput
    /**
     * In case the TABLE_TEMPLATE found by the `where` argument doesn't exist, create a new TABLE_TEMPLATE with this data.
     */
    create: XOR<TABLE_TEMPLATECreateInput, TABLE_TEMPLATEUncheckedCreateInput>
    /**
     * In case the TABLE_TEMPLATE was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TABLE_TEMPLATEUpdateInput, TABLE_TEMPLATEUncheckedUpdateInput>
  }

  /**
   * TABLE_TEMPLATE delete
   */
  export type TABLE_TEMPLATEDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TABLE_TEMPLATE
     */
    select?: TABLE_TEMPLATESelect<ExtArgs> | null
    /**
     * Omit specific fields from the TABLE_TEMPLATE
     */
    omit?: TABLE_TEMPLATEOmit<ExtArgs> | null
    /**
     * Filter which TABLE_TEMPLATE to delete.
     */
    where: TABLE_TEMPLATEWhereUniqueInput
  }

  /**
   * TABLE_TEMPLATE deleteMany
   */
  export type TABLE_TEMPLATEDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TABLE_TEMPLATES to delete
     */
    where?: TABLE_TEMPLATEWhereInput
    /**
     * Limit how many TABLE_TEMPLATES to delete.
     */
    limit?: number
  }

  /**
   * TABLE_TEMPLATE without action
   */
  export type TABLE_TEMPLATEDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TABLE_TEMPLATE
     */
    select?: TABLE_TEMPLATESelect<ExtArgs> | null
    /**
     * Omit specific fields from the TABLE_TEMPLATE
     */
    omit?: TABLE_TEMPLATEOmit<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    avatar: string | null
    password: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    avatar: string | null
    password: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    avatar: number
    password: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    avatar?: true
    password?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    avatar?: true
    password?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    avatar?: true
    password?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    fullName: string | null
    email: string | null
    avatar: string | null
    password: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    avatar?: boolean
    password?: boolean
    Articles?: boolean | Users$ArticlesArgs<ExtArgs>
    Orders?: boolean | Users$OrdersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    avatar?: boolean
    password?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "avatar" | "password", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Articles?: boolean | Users$ArticlesArgs<ExtArgs>
    Orders?: boolean | Users$OrdersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      Articles: Prisma.$ArticlesPayload<ExtArgs>[]
      Orders: Prisma.$OrdersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string | null
      email: string | null
      avatar: string | null
      password: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Articles<T extends Users$ArticlesArgs<ExtArgs> = {}>(args?: Subset<T, Users$ArticlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Orders<T extends Users$OrdersArgs<ExtArgs> = {}>(args?: Subset<T, Users$OrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly fullName: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly avatar: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data?: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.Articles
   */
  export type Users$ArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    where?: ArticlesWhereInput
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    cursor?: ArticlesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * Users.Orders
   */
  export type Users$OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ArticlesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    imageUrl: 'imageUrl',
    views: 'views',
    userId: 'userId',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticlesScalarFieldEnum = (typeof ArticlesScalarFieldEnum)[keyof typeof ArticlesScalarFieldEnum]


  export const FoodsScalarFieldEnum: {
    food_id: 'food_id',
    name: 'name',
    description: 'description'
  };

  export type FoodsScalarFieldEnum = (typeof FoodsScalarFieldEnum)[keyof typeof FoodsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    foodId: 'foodId'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const TABLE_TEMPLATEScalarFieldEnum: {
    id: 'id',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TABLE_TEMPLATEScalarFieldEnum = (typeof TABLE_TEMPLATEScalarFieldEnum)[keyof typeof TABLE_TEMPLATEScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    avatar: 'avatar',
    password: 'password'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ArticlesOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content',
    imageUrl: 'imageUrl'
  };

  export type ArticlesOrderByRelevanceFieldEnum = (typeof ArticlesOrderByRelevanceFieldEnum)[keyof typeof ArticlesOrderByRelevanceFieldEnum]


  export const FoodsOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type FoodsOrderByRelevanceFieldEnum = (typeof FoodsOrderByRelevanceFieldEnum)[keyof typeof FoodsOrderByRelevanceFieldEnum]


  export const UsersOrderByRelevanceFieldEnum: {
    fullName: 'fullName',
    email: 'email',
    avatar: 'avatar',
    password: 'password'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ArticlesWhereInput = {
    AND?: ArticlesWhereInput | ArticlesWhereInput[]
    OR?: ArticlesWhereInput[]
    NOT?: ArticlesWhereInput | ArticlesWhereInput[]
    id?: IntFilter<"Articles"> | number
    title?: StringNullableFilter<"Articles"> | string | null
    content?: StringNullableFilter<"Articles"> | string | null
    imageUrl?: StringNullableFilter<"Articles"> | string | null
    views?: IntFilter<"Articles"> | number
    userId?: IntFilter<"Articles"> | number
    isDeleted?: BoolFilter<"Articles"> | boolean
    createdAt?: DateTimeFilter<"Articles"> | Date | string
    updatedAt?: DateTimeFilter<"Articles"> | Date | string
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type ArticlesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    views?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Users?: UsersOrderByWithRelationInput
    _relevance?: ArticlesOrderByRelevanceInput
  }

  export type ArticlesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ArticlesWhereInput | ArticlesWhereInput[]
    OR?: ArticlesWhereInput[]
    NOT?: ArticlesWhereInput | ArticlesWhereInput[]
    title?: StringNullableFilter<"Articles"> | string | null
    content?: StringNullableFilter<"Articles"> | string | null
    imageUrl?: StringNullableFilter<"Articles"> | string | null
    views?: IntFilter<"Articles"> | number
    userId?: IntFilter<"Articles"> | number
    isDeleted?: BoolFilter<"Articles"> | boolean
    createdAt?: DateTimeFilter<"Articles"> | Date | string
    updatedAt?: DateTimeFilter<"Articles"> | Date | string
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type ArticlesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    views?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticlesCountOrderByAggregateInput
    _avg?: ArticlesAvgOrderByAggregateInput
    _max?: ArticlesMaxOrderByAggregateInput
    _min?: ArticlesMinOrderByAggregateInput
    _sum?: ArticlesSumOrderByAggregateInput
  }

  export type ArticlesScalarWhereWithAggregatesInput = {
    AND?: ArticlesScalarWhereWithAggregatesInput | ArticlesScalarWhereWithAggregatesInput[]
    OR?: ArticlesScalarWhereWithAggregatesInput[]
    NOT?: ArticlesScalarWhereWithAggregatesInput | ArticlesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Articles"> | number
    title?: StringNullableWithAggregatesFilter<"Articles"> | string | null
    content?: StringNullableWithAggregatesFilter<"Articles"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Articles"> | string | null
    views?: IntWithAggregatesFilter<"Articles"> | number
    userId?: IntWithAggregatesFilter<"Articles"> | number
    isDeleted?: BoolWithAggregatesFilter<"Articles"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Articles"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Articles"> | Date | string
  }

  export type FoodsWhereInput = {
    AND?: FoodsWhereInput | FoodsWhereInput[]
    OR?: FoodsWhereInput[]
    NOT?: FoodsWhereInput | FoodsWhereInput[]
    food_id?: IntFilter<"Foods"> | number
    name?: StringNullableFilter<"Foods"> | string | null
    description?: StringNullableFilter<"Foods"> | string | null
    Orders?: OrdersListRelationFilter
  }

  export type FoodsOrderByWithRelationInput = {
    food_id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    Orders?: OrdersOrderByRelationAggregateInput
    _relevance?: FoodsOrderByRelevanceInput
  }

  export type FoodsWhereUniqueInput = Prisma.AtLeast<{
    food_id?: number
    AND?: FoodsWhereInput | FoodsWhereInput[]
    OR?: FoodsWhereInput[]
    NOT?: FoodsWhereInput | FoodsWhereInput[]
    name?: StringNullableFilter<"Foods"> | string | null
    description?: StringNullableFilter<"Foods"> | string | null
    Orders?: OrdersListRelationFilter
  }, "food_id">

  export type FoodsOrderByWithAggregationInput = {
    food_id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: FoodsCountOrderByAggregateInput
    _avg?: FoodsAvgOrderByAggregateInput
    _max?: FoodsMaxOrderByAggregateInput
    _min?: FoodsMinOrderByAggregateInput
    _sum?: FoodsSumOrderByAggregateInput
  }

  export type FoodsScalarWhereWithAggregatesInput = {
    AND?: FoodsScalarWhereWithAggregatesInput | FoodsScalarWhereWithAggregatesInput[]
    OR?: FoodsScalarWhereWithAggregatesInput[]
    NOT?: FoodsScalarWhereWithAggregatesInput | FoodsScalarWhereWithAggregatesInput[]
    food_id?: IntWithAggregatesFilter<"Foods"> | number
    name?: StringNullableWithAggregatesFilter<"Foods"> | string | null
    description?: StringNullableWithAggregatesFilter<"Foods"> | string | null
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id?: IntFilter<"Orders"> | number
    userId?: IntNullableFilter<"Orders"> | number | null
    foodId?: IntNullableFilter<"Orders"> | number | null
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    Foods?: XOR<FoodsNullableScalarRelationFilter, FoodsWhereInput> | null
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    foodId?: SortOrderInput | SortOrder
    Users?: UsersOrderByWithRelationInput
    Foods?: FoodsOrderByWithRelationInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    userId?: IntNullableFilter<"Orders"> | number | null
    foodId?: IntNullableFilter<"Orders"> | number | null
    Users?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    Foods?: XOR<FoodsNullableScalarRelationFilter, FoodsWhereInput> | null
  }, "id">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    foodId?: SortOrderInput | SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Orders"> | number
    userId?: IntNullableWithAggregatesFilter<"Orders"> | number | null
    foodId?: IntNullableWithAggregatesFilter<"Orders"> | number | null
  }

  export type TABLE_TEMPLATEWhereInput = {
    AND?: TABLE_TEMPLATEWhereInput | TABLE_TEMPLATEWhereInput[]
    OR?: TABLE_TEMPLATEWhereInput[]
    NOT?: TABLE_TEMPLATEWhereInput | TABLE_TEMPLATEWhereInput[]
    id?: IntFilter<"TABLE_TEMPLATE"> | number
    isDeleted?: BoolFilter<"TABLE_TEMPLATE"> | boolean
    createdAt?: DateTimeFilter<"TABLE_TEMPLATE"> | Date | string
    updatedAt?: DateTimeFilter<"TABLE_TEMPLATE"> | Date | string
  }

  export type TABLE_TEMPLATEOrderByWithRelationInput = {
    id?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TABLE_TEMPLATEWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TABLE_TEMPLATEWhereInput | TABLE_TEMPLATEWhereInput[]
    OR?: TABLE_TEMPLATEWhereInput[]
    NOT?: TABLE_TEMPLATEWhereInput | TABLE_TEMPLATEWhereInput[]
    isDeleted?: BoolFilter<"TABLE_TEMPLATE"> | boolean
    createdAt?: DateTimeFilter<"TABLE_TEMPLATE"> | Date | string
    updatedAt?: DateTimeFilter<"TABLE_TEMPLATE"> | Date | string
  }, "id">

  export type TABLE_TEMPLATEOrderByWithAggregationInput = {
    id?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TABLE_TEMPLATECountOrderByAggregateInput
    _avg?: TABLE_TEMPLATEAvgOrderByAggregateInput
    _max?: TABLE_TEMPLATEMaxOrderByAggregateInput
    _min?: TABLE_TEMPLATEMinOrderByAggregateInput
    _sum?: TABLE_TEMPLATESumOrderByAggregateInput
  }

  export type TABLE_TEMPLATEScalarWhereWithAggregatesInput = {
    AND?: TABLE_TEMPLATEScalarWhereWithAggregatesInput | TABLE_TEMPLATEScalarWhereWithAggregatesInput[]
    OR?: TABLE_TEMPLATEScalarWhereWithAggregatesInput[]
    NOT?: TABLE_TEMPLATEScalarWhereWithAggregatesInput | TABLE_TEMPLATEScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TABLE_TEMPLATE"> | number
    isDeleted?: BoolWithAggregatesFilter<"TABLE_TEMPLATE"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TABLE_TEMPLATE"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TABLE_TEMPLATE"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    fullName?: StringNullableFilter<"Users"> | string | null
    email?: StringNullableFilter<"Users"> | string | null
    avatar?: StringNullableFilter<"Users"> | string | null
    password?: StringNullableFilter<"Users"> | string | null
    Articles?: ArticlesListRelationFilter
    Orders?: OrdersListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    Articles?: ArticlesOrderByRelationAggregateInput
    Orders?: OrdersOrderByRelationAggregateInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    fullName?: StringNullableFilter<"Users"> | string | null
    email?: StringNullableFilter<"Users"> | string | null
    avatar?: StringNullableFilter<"Users"> | string | null
    password?: StringNullableFilter<"Users"> | string | null
    Articles?: ArticlesListRelationFilter
    Orders?: OrdersListRelationFilter
  }, "id">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    fullName?: StringNullableWithAggregatesFilter<"Users"> | string | null
    email?: StringNullableWithAggregatesFilter<"Users"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Users"> | string | null
    password?: StringNullableWithAggregatesFilter<"Users"> | string | null
  }

  export type ArticlesCreateInput = {
    title?: string | null
    content?: string | null
    imageUrl?: string | null
    views?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Users: UsersCreateNestedOneWithoutArticlesInput
  }

  export type ArticlesUncheckedCreateInput = {
    id?: number
    title?: string | null
    content?: string | null
    imageUrl?: string | null
    views?: number
    userId: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticlesUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type ArticlesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticlesCreateManyInput = {
    id?: number
    title?: string | null
    content?: string | null
    imageUrl?: string | null
    views?: number
    userId: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticlesUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticlesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodsCreateInput = {
    name?: string | null
    description?: string | null
    Orders?: OrdersCreateNestedManyWithoutFoodsInput
  }

  export type FoodsUncheckedCreateInput = {
    food_id?: number
    name?: string | null
    description?: string | null
    Orders?: OrdersUncheckedCreateNestedManyWithoutFoodsInput
  }

  export type FoodsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Orders?: OrdersUpdateManyWithoutFoodsNestedInput
  }

  export type FoodsUncheckedUpdateInput = {
    food_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Orders?: OrdersUncheckedUpdateManyWithoutFoodsNestedInput
  }

  export type FoodsCreateManyInput = {
    food_id?: number
    name?: string | null
    description?: string | null
  }

  export type FoodsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FoodsUncheckedUpdateManyInput = {
    food_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrdersCreateInput = {
    Users?: UsersCreateNestedOneWithoutOrdersInput
    Foods?: FoodsCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateInput = {
    id?: number
    userId?: number | null
    foodId?: number | null
  }

  export type OrdersUpdateInput = {
    Users?: UsersUpdateOneWithoutOrdersNestedInput
    Foods?: FoodsUpdateOneWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    foodId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrdersCreateManyInput = {
    id?: number
    userId?: number | null
    foodId?: number | null
  }

  export type OrdersUpdateManyMutationInput = {

  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    foodId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TABLE_TEMPLATECreateInput = {
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TABLE_TEMPLATEUncheckedCreateInput = {
    id?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TABLE_TEMPLATEUpdateInput = {
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TABLE_TEMPLATEUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TABLE_TEMPLATECreateManyInput = {
    id?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TABLE_TEMPLATEUpdateManyMutationInput = {
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TABLE_TEMPLATEUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    fullName?: string | null
    email?: string | null
    avatar?: string | null
    password?: string | null
    Articles?: ArticlesCreateNestedManyWithoutUsersInput
    Orders?: OrdersCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    fullName?: string | null
    email?: string | null
    avatar?: string | null
    password?: string | null
    Articles?: ArticlesUncheckedCreateNestedManyWithoutUsersInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Articles?: ArticlesUpdateManyWithoutUsersNestedInput
    Orders?: OrdersUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Articles?: ArticlesUncheckedUpdateManyWithoutUsersNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    fullName?: string | null
    email?: string | null
    avatar?: string | null
    password?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ArticlesOrderByRelevanceInput = {
    fields: ArticlesOrderByRelevanceFieldEnum | ArticlesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ArticlesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    views?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticlesAvgOrderByAggregateInput = {
    id?: SortOrder
    views?: SortOrder
    userId?: SortOrder
  }

  export type ArticlesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    views?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticlesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    views?: SortOrder
    userId?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticlesSumOrderByAggregateInput = {
    id?: SortOrder
    views?: SortOrder
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FoodsOrderByRelevanceInput = {
    fields: FoodsOrderByRelevanceFieldEnum | FoodsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FoodsCountOrderByAggregateInput = {
    food_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type FoodsAvgOrderByAggregateInput = {
    food_id?: SortOrder
  }

  export type FoodsMaxOrderByAggregateInput = {
    food_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type FoodsMinOrderByAggregateInput = {
    food_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type FoodsSumOrderByAggregateInput = {
    food_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type FoodsNullableScalarRelationFilter = {
    is?: FoodsWhereInput | null
    isNot?: FoodsWhereInput | null
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type TABLE_TEMPLATECountOrderByAggregateInput = {
    id?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TABLE_TEMPLATEAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TABLE_TEMPLATEMaxOrderByAggregateInput = {
    id?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TABLE_TEMPLATEMinOrderByAggregateInput = {
    id?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TABLE_TEMPLATESumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ArticlesListRelationFilter = {
    every?: ArticlesWhereInput
    some?: ArticlesWhereInput
    none?: ArticlesWhereInput
  }

  export type ArticlesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersCreateNestedOneWithoutArticlesInput = {
    create?: XOR<UsersCreateWithoutArticlesInput, UsersUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutArticlesInput
    connect?: UsersWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsersUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<UsersCreateWithoutArticlesInput, UsersUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutArticlesInput
    upsert?: UsersUpsertWithoutArticlesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutArticlesInput, UsersUpdateWithoutArticlesInput>, UsersUncheckedUpdateWithoutArticlesInput>
  }

  export type OrdersCreateNestedManyWithoutFoodsInput = {
    create?: XOR<OrdersCreateWithoutFoodsInput, OrdersUncheckedCreateWithoutFoodsInput> | OrdersCreateWithoutFoodsInput[] | OrdersUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutFoodsInput | OrdersCreateOrConnectWithoutFoodsInput[]
    createMany?: OrdersCreateManyFoodsInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutFoodsInput = {
    create?: XOR<OrdersCreateWithoutFoodsInput, OrdersUncheckedCreateWithoutFoodsInput> | OrdersCreateWithoutFoodsInput[] | OrdersUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutFoodsInput | OrdersCreateOrConnectWithoutFoodsInput[]
    createMany?: OrdersCreateManyFoodsInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type OrdersUpdateManyWithoutFoodsNestedInput = {
    create?: XOR<OrdersCreateWithoutFoodsInput, OrdersUncheckedCreateWithoutFoodsInput> | OrdersCreateWithoutFoodsInput[] | OrdersUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutFoodsInput | OrdersCreateOrConnectWithoutFoodsInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutFoodsInput | OrdersUpsertWithWhereUniqueWithoutFoodsInput[]
    createMany?: OrdersCreateManyFoodsInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutFoodsInput | OrdersUpdateWithWhereUniqueWithoutFoodsInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutFoodsInput | OrdersUpdateManyWithWhereWithoutFoodsInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutFoodsNestedInput = {
    create?: XOR<OrdersCreateWithoutFoodsInput, OrdersUncheckedCreateWithoutFoodsInput> | OrdersCreateWithoutFoodsInput[] | OrdersUncheckedCreateWithoutFoodsInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutFoodsInput | OrdersCreateOrConnectWithoutFoodsInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutFoodsInput | OrdersUpsertWithWhereUniqueWithoutFoodsInput[]
    createMany?: OrdersCreateManyFoodsInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutFoodsInput | OrdersUpdateWithWhereUniqueWithoutFoodsInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutFoodsInput | OrdersUpdateManyWithWhereWithoutFoodsInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    connect?: UsersWhereUniqueInput
  }

  export type FoodsCreateNestedOneWithoutOrdersInput = {
    create?: XOR<FoodsCreateWithoutOrdersInput, FoodsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: FoodsCreateOrConnectWithoutOrdersInput
    connect?: FoodsWhereUniqueInput
  }

  export type UsersUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    upsert?: UsersUpsertWithoutOrdersInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutOrdersInput, UsersUpdateWithoutOrdersInput>, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type FoodsUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<FoodsCreateWithoutOrdersInput, FoodsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: FoodsCreateOrConnectWithoutOrdersInput
    upsert?: FoodsUpsertWithoutOrdersInput
    disconnect?: FoodsWhereInput | boolean
    delete?: FoodsWhereInput | boolean
    connect?: FoodsWhereUniqueInput
    update?: XOR<XOR<FoodsUpdateToOneWithWhereWithoutOrdersInput, FoodsUpdateWithoutOrdersInput>, FoodsUncheckedUpdateWithoutOrdersInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ArticlesCreateNestedManyWithoutUsersInput = {
    create?: XOR<ArticlesCreateWithoutUsersInput, ArticlesUncheckedCreateWithoutUsersInput> | ArticlesCreateWithoutUsersInput[] | ArticlesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ArticlesCreateOrConnectWithoutUsersInput | ArticlesCreateOrConnectWithoutUsersInput[]
    createMany?: ArticlesCreateManyUsersInputEnvelope
    connect?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutUsersInput = {
    create?: XOR<OrdersCreateWithoutUsersInput, OrdersUncheckedCreateWithoutUsersInput> | OrdersCreateWithoutUsersInput[] | OrdersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUsersInput | OrdersCreateOrConnectWithoutUsersInput[]
    createMany?: OrdersCreateManyUsersInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type ArticlesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ArticlesCreateWithoutUsersInput, ArticlesUncheckedCreateWithoutUsersInput> | ArticlesCreateWithoutUsersInput[] | ArticlesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ArticlesCreateOrConnectWithoutUsersInput | ArticlesCreateOrConnectWithoutUsersInput[]
    createMany?: ArticlesCreateManyUsersInputEnvelope
    connect?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<OrdersCreateWithoutUsersInput, OrdersUncheckedCreateWithoutUsersInput> | OrdersCreateWithoutUsersInput[] | OrdersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUsersInput | OrdersCreateOrConnectWithoutUsersInput[]
    createMany?: OrdersCreateManyUsersInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type ArticlesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ArticlesCreateWithoutUsersInput, ArticlesUncheckedCreateWithoutUsersInput> | ArticlesCreateWithoutUsersInput[] | ArticlesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ArticlesCreateOrConnectWithoutUsersInput | ArticlesCreateOrConnectWithoutUsersInput[]
    upsert?: ArticlesUpsertWithWhereUniqueWithoutUsersInput | ArticlesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ArticlesCreateManyUsersInputEnvelope
    set?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    disconnect?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    delete?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    connect?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    update?: ArticlesUpdateWithWhereUniqueWithoutUsersInput | ArticlesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ArticlesUpdateManyWithWhereWithoutUsersInput | ArticlesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ArticlesScalarWhereInput | ArticlesScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<OrdersCreateWithoutUsersInput, OrdersUncheckedCreateWithoutUsersInput> | OrdersCreateWithoutUsersInput[] | OrdersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUsersInput | OrdersCreateOrConnectWithoutUsersInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUsersInput | OrdersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: OrdersCreateManyUsersInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUsersInput | OrdersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUsersInput | OrdersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type ArticlesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ArticlesCreateWithoutUsersInput, ArticlesUncheckedCreateWithoutUsersInput> | ArticlesCreateWithoutUsersInput[] | ArticlesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ArticlesCreateOrConnectWithoutUsersInput | ArticlesCreateOrConnectWithoutUsersInput[]
    upsert?: ArticlesUpsertWithWhereUniqueWithoutUsersInput | ArticlesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ArticlesCreateManyUsersInputEnvelope
    set?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    disconnect?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    delete?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    connect?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    update?: ArticlesUpdateWithWhereUniqueWithoutUsersInput | ArticlesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ArticlesUpdateManyWithWhereWithoutUsersInput | ArticlesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ArticlesScalarWhereInput | ArticlesScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<OrdersCreateWithoutUsersInput, OrdersUncheckedCreateWithoutUsersInput> | OrdersCreateWithoutUsersInput[] | OrdersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUsersInput | OrdersCreateOrConnectWithoutUsersInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUsersInput | OrdersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: OrdersCreateManyUsersInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUsersInput | OrdersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUsersInput | OrdersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UsersCreateWithoutArticlesInput = {
    fullName?: string | null
    email?: string | null
    avatar?: string | null
    password?: string | null
    Orders?: OrdersCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutArticlesInput = {
    id?: number
    fullName?: string | null
    email?: string | null
    avatar?: string | null
    password?: string | null
    Orders?: OrdersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutArticlesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutArticlesInput, UsersUncheckedCreateWithoutArticlesInput>
  }

  export type UsersUpsertWithoutArticlesInput = {
    update: XOR<UsersUpdateWithoutArticlesInput, UsersUncheckedUpdateWithoutArticlesInput>
    create: XOR<UsersCreateWithoutArticlesInput, UsersUncheckedCreateWithoutArticlesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutArticlesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutArticlesInput, UsersUncheckedUpdateWithoutArticlesInput>
  }

  export type UsersUpdateWithoutArticlesInput = {
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Orders?: OrdersUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutArticlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Orders?: OrdersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type OrdersCreateWithoutFoodsInput = {
    Users?: UsersCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutFoodsInput = {
    id?: number
    userId?: number | null
  }

  export type OrdersCreateOrConnectWithoutFoodsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutFoodsInput, OrdersUncheckedCreateWithoutFoodsInput>
  }

  export type OrdersCreateManyFoodsInputEnvelope = {
    data: OrdersCreateManyFoodsInput | OrdersCreateManyFoodsInput[]
    skipDuplicates?: boolean
  }

  export type OrdersUpsertWithWhereUniqueWithoutFoodsInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutFoodsInput, OrdersUncheckedUpdateWithoutFoodsInput>
    create: XOR<OrdersCreateWithoutFoodsInput, OrdersUncheckedCreateWithoutFoodsInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutFoodsInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutFoodsInput, OrdersUncheckedUpdateWithoutFoodsInput>
  }

  export type OrdersUpdateManyWithWhereWithoutFoodsInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutFoodsInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    id?: IntFilter<"Orders"> | number
    userId?: IntNullableFilter<"Orders"> | number | null
    foodId?: IntNullableFilter<"Orders"> | number | null
  }

  export type UsersCreateWithoutOrdersInput = {
    fullName?: string | null
    email?: string | null
    avatar?: string | null
    password?: string | null
    Articles?: ArticlesCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutOrdersInput = {
    id?: number
    fullName?: string | null
    email?: string | null
    avatar?: string | null
    password?: string | null
    Articles?: ArticlesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutOrdersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
  }

  export type FoodsCreateWithoutOrdersInput = {
    name?: string | null
    description?: string | null
  }

  export type FoodsUncheckedCreateWithoutOrdersInput = {
    food_id?: number
    name?: string | null
    description?: string | null
  }

  export type FoodsCreateOrConnectWithoutOrdersInput = {
    where: FoodsWhereUniqueInput
    create: XOR<FoodsCreateWithoutOrdersInput, FoodsUncheckedCreateWithoutOrdersInput>
  }

  export type UsersUpsertWithoutOrdersInput = {
    update: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type UsersUpdateWithoutOrdersInput = {
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Articles?: ArticlesUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    Articles?: ArticlesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type FoodsUpsertWithoutOrdersInput = {
    update: XOR<FoodsUpdateWithoutOrdersInput, FoodsUncheckedUpdateWithoutOrdersInput>
    create: XOR<FoodsCreateWithoutOrdersInput, FoodsUncheckedCreateWithoutOrdersInput>
    where?: FoodsWhereInput
  }

  export type FoodsUpdateToOneWithWhereWithoutOrdersInput = {
    where?: FoodsWhereInput
    data: XOR<FoodsUpdateWithoutOrdersInput, FoodsUncheckedUpdateWithoutOrdersInput>
  }

  export type FoodsUpdateWithoutOrdersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FoodsUncheckedUpdateWithoutOrdersInput = {
    food_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArticlesCreateWithoutUsersInput = {
    title?: string | null
    content?: string | null
    imageUrl?: string | null
    views?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticlesUncheckedCreateWithoutUsersInput = {
    id?: number
    title?: string | null
    content?: string | null
    imageUrl?: string | null
    views?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticlesCreateOrConnectWithoutUsersInput = {
    where: ArticlesWhereUniqueInput
    create: XOR<ArticlesCreateWithoutUsersInput, ArticlesUncheckedCreateWithoutUsersInput>
  }

  export type ArticlesCreateManyUsersInputEnvelope = {
    data: ArticlesCreateManyUsersInput | ArticlesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutUsersInput = {
    Foods?: FoodsCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutUsersInput = {
    id?: number
    foodId?: number | null
  }

  export type OrdersCreateOrConnectWithoutUsersInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutUsersInput, OrdersUncheckedCreateWithoutUsersInput>
  }

  export type OrdersCreateManyUsersInputEnvelope = {
    data: OrdersCreateManyUsersInput | OrdersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ArticlesUpsertWithWhereUniqueWithoutUsersInput = {
    where: ArticlesWhereUniqueInput
    update: XOR<ArticlesUpdateWithoutUsersInput, ArticlesUncheckedUpdateWithoutUsersInput>
    create: XOR<ArticlesCreateWithoutUsersInput, ArticlesUncheckedCreateWithoutUsersInput>
  }

  export type ArticlesUpdateWithWhereUniqueWithoutUsersInput = {
    where: ArticlesWhereUniqueInput
    data: XOR<ArticlesUpdateWithoutUsersInput, ArticlesUncheckedUpdateWithoutUsersInput>
  }

  export type ArticlesUpdateManyWithWhereWithoutUsersInput = {
    where: ArticlesScalarWhereInput
    data: XOR<ArticlesUpdateManyMutationInput, ArticlesUncheckedUpdateManyWithoutUsersInput>
  }

  export type ArticlesScalarWhereInput = {
    AND?: ArticlesScalarWhereInput | ArticlesScalarWhereInput[]
    OR?: ArticlesScalarWhereInput[]
    NOT?: ArticlesScalarWhereInput | ArticlesScalarWhereInput[]
    id?: IntFilter<"Articles"> | number
    title?: StringNullableFilter<"Articles"> | string | null
    content?: StringNullableFilter<"Articles"> | string | null
    imageUrl?: StringNullableFilter<"Articles"> | string | null
    views?: IntFilter<"Articles"> | number
    userId?: IntFilter<"Articles"> | number
    isDeleted?: BoolFilter<"Articles"> | boolean
    createdAt?: DateTimeFilter<"Articles"> | Date | string
    updatedAt?: DateTimeFilter<"Articles"> | Date | string
  }

  export type OrdersUpsertWithWhereUniqueWithoutUsersInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutUsersInput, OrdersUncheckedUpdateWithoutUsersInput>
    create: XOR<OrdersCreateWithoutUsersInput, OrdersUncheckedCreateWithoutUsersInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutUsersInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutUsersInput, OrdersUncheckedUpdateWithoutUsersInput>
  }

  export type OrdersUpdateManyWithWhereWithoutUsersInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutUsersInput>
  }

  export type OrdersCreateManyFoodsInput = {
    id?: number
    userId?: number | null
  }

  export type OrdersUpdateWithoutFoodsInput = {
    Users?: UsersUpdateOneWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutFoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrdersUncheckedUpdateManyWithoutFoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ArticlesCreateManyUsersInput = {
    id?: number
    title?: string | null
    content?: string | null
    imageUrl?: string | null
    views?: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersCreateManyUsersInput = {
    id?: number
    foodId?: number | null
  }

  export type ArticlesUpdateWithoutUsersInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticlesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticlesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUpdateWithoutUsersInput = {
    Foods?: FoodsUpdateOneWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrdersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
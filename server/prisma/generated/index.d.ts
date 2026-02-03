
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AttributeSubmission
 * 
 */
export type AttributeSubmission = $Result.DefaultSelection<Prisma.$AttributeSubmissionPayload>
/**
 * Model BuildTeam
 * 
 */
export type BuildTeam = $Result.DefaultSelection<Prisma.$BuildTeamPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attributeSubmission`: Exposes CRUD operations for the **AttributeSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttributeSubmissions
    * const attributeSubmissions = await prisma.attributeSubmission.findMany()
    * ```
    */
  get attributeSubmission(): Prisma.AttributeSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.buildTeam`: Exposes CRUD operations for the **BuildTeam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BuildTeams
    * const buildTeams = await prisma.buildTeam.findMany()
    * ```
    */
  get buildTeam(): Prisma.BuildTeamDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
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
    User: 'User',
    AttributeSubmission: 'AttributeSubmission',
    BuildTeam: 'BuildTeam'
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
      modelProps: "user" | "attributeSubmission" | "buildTeam"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AttributeSubmission: {
        payload: Prisma.$AttributeSubmissionPayload<ExtArgs>
        fields: Prisma.AttributeSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttributeSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttributeSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeSubmissionPayload>
          }
          findFirst: {
            args: Prisma.AttributeSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttributeSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeSubmissionPayload>
          }
          findMany: {
            args: Prisma.AttributeSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeSubmissionPayload>[]
          }
          create: {
            args: Prisma.AttributeSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeSubmissionPayload>
          }
          createMany: {
            args: Prisma.AttributeSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttributeSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeSubmissionPayload>[]
          }
          delete: {
            args: Prisma.AttributeSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeSubmissionPayload>
          }
          update: {
            args: Prisma.AttributeSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.AttributeSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttributeSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttributeSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.AttributeSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttributeSubmissionPayload>
          }
          aggregate: {
            args: Prisma.AttributeSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttributeSubmission>
          }
          groupBy: {
            args: Prisma.AttributeSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttributeSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttributeSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<AttributeSubmissionCountAggregateOutputType> | number
          }
        }
      }
      BuildTeam: {
        payload: Prisma.$BuildTeamPayload<ExtArgs>
        fields: Prisma.BuildTeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BuildTeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildTeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BuildTeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildTeamPayload>
          }
          findFirst: {
            args: Prisma.BuildTeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildTeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BuildTeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildTeamPayload>
          }
          findMany: {
            args: Prisma.BuildTeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildTeamPayload>[]
          }
          create: {
            args: Prisma.BuildTeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildTeamPayload>
          }
          createMany: {
            args: Prisma.BuildTeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BuildTeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildTeamPayload>[]
          }
          delete: {
            args: Prisma.BuildTeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildTeamPayload>
          }
          update: {
            args: Prisma.BuildTeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildTeamPayload>
          }
          deleteMany: {
            args: Prisma.BuildTeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BuildTeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BuildTeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildTeamPayload>[]
          }
          upsert: {
            args: Prisma.BuildTeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildTeamPayload>
          }
          aggregate: {
            args: Prisma.BuildTeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuildTeam>
          }
          groupBy: {
            args: Prisma.BuildTeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<BuildTeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.BuildTeamCountArgs<ExtArgs>
            result: $Utils.Optional<BuildTeamCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    attributeSubmission?: AttributeSubmissionOmit
    buildTeam?: BuildTeamOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    submissions: number
    teams: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | UserCountOutputTypeCountSubmissionsArgs
    teams?: boolean | UserCountOutputTypeCountTeamsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeSubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildTeamWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    teams?: boolean | User$teamsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    teams?: boolean | User$teamsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      submissions: Prisma.$AttributeSubmissionPayload<ExtArgs>[]
      teams: Prisma.$BuildTeamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submissions<T extends User$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teams<T extends User$teamsArgs<ExtArgs> = {}>(args?: Subset<T, User$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildTeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.submissions
   */
  export type User$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeSubmission
     */
    select?: AttributeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeSubmission
     */
    omit?: AttributeSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeSubmissionInclude<ExtArgs> | null
    where?: AttributeSubmissionWhereInput
    orderBy?: AttributeSubmissionOrderByWithRelationInput | AttributeSubmissionOrderByWithRelationInput[]
    cursor?: AttributeSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttributeSubmissionScalarFieldEnum | AttributeSubmissionScalarFieldEnum[]
  }

  /**
   * User.teams
   */
  export type User$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildTeam
     */
    select?: BuildTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildTeam
     */
    omit?: BuildTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildTeamInclude<ExtArgs> | null
    where?: BuildTeamWhereInput
    orderBy?: BuildTeamOrderByWithRelationInput | BuildTeamOrderByWithRelationInput[]
    cursor?: BuildTeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BuildTeamScalarFieldEnum | BuildTeamScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model AttributeSubmission
   */

  export type AggregateAttributeSubmission = {
    _count: AttributeSubmissionCountAggregateOutputType | null
    _min: AttributeSubmissionMinAggregateOutputType | null
    _max: AttributeSubmissionMaxAggregateOutputType | null
  }

  export type AttributeSubmissionMinAggregateOutputType = {
    id: string | null
    athleteId: string | null
    createdAt: Date | null
    userId: string | null
    favorite: boolean | null
    mvp: boolean | null
    comment: string | null
    ranking: string | null
  }

  export type AttributeSubmissionMaxAggregateOutputType = {
    id: string | null
    athleteId: string | null
    createdAt: Date | null
    userId: string | null
    favorite: boolean | null
    mvp: boolean | null
    comment: string | null
    ranking: string | null
  }

  export type AttributeSubmissionCountAggregateOutputType = {
    id: number
    athleteId: number
    createdAt: number
    userId: number
    favorite: number
    mvp: number
    comment: number
    ranking: number
    values: number
    _all: number
  }


  export type AttributeSubmissionMinAggregateInputType = {
    id?: true
    athleteId?: true
    createdAt?: true
    userId?: true
    favorite?: true
    mvp?: true
    comment?: true
    ranking?: true
  }

  export type AttributeSubmissionMaxAggregateInputType = {
    id?: true
    athleteId?: true
    createdAt?: true
    userId?: true
    favorite?: true
    mvp?: true
    comment?: true
    ranking?: true
  }

  export type AttributeSubmissionCountAggregateInputType = {
    id?: true
    athleteId?: true
    createdAt?: true
    userId?: true
    favorite?: true
    mvp?: true
    comment?: true
    ranking?: true
    values?: true
    _all?: true
  }

  export type AttributeSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttributeSubmission to aggregate.
     */
    where?: AttributeSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeSubmissions to fetch.
     */
    orderBy?: AttributeSubmissionOrderByWithRelationInput | AttributeSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttributeSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttributeSubmissions
    **/
    _count?: true | AttributeSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttributeSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttributeSubmissionMaxAggregateInputType
  }

  export type GetAttributeSubmissionAggregateType<T extends AttributeSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateAttributeSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttributeSubmission[P]>
      : GetScalarType<T[P], AggregateAttributeSubmission[P]>
  }




  export type AttributeSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeSubmissionWhereInput
    orderBy?: AttributeSubmissionOrderByWithAggregationInput | AttributeSubmissionOrderByWithAggregationInput[]
    by: AttributeSubmissionScalarFieldEnum[] | AttributeSubmissionScalarFieldEnum
    having?: AttributeSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttributeSubmissionCountAggregateInputType | true
    _min?: AttributeSubmissionMinAggregateInputType
    _max?: AttributeSubmissionMaxAggregateInputType
  }

  export type AttributeSubmissionGroupByOutputType = {
    id: string
    athleteId: string
    createdAt: Date
    userId: string
    favorite: boolean
    mvp: boolean | null
    comment: string | null
    ranking: string | null
    values: JsonValue
    _count: AttributeSubmissionCountAggregateOutputType | null
    _min: AttributeSubmissionMinAggregateOutputType | null
    _max: AttributeSubmissionMaxAggregateOutputType | null
  }

  type GetAttributeSubmissionGroupByPayload<T extends AttributeSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttributeSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttributeSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttributeSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], AttributeSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type AttributeSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    athleteId?: boolean
    createdAt?: boolean
    userId?: boolean
    favorite?: boolean
    mvp?: boolean
    comment?: boolean
    ranking?: boolean
    values?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attributeSubmission"]>

  export type AttributeSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    athleteId?: boolean
    createdAt?: boolean
    userId?: boolean
    favorite?: boolean
    mvp?: boolean
    comment?: boolean
    ranking?: boolean
    values?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attributeSubmission"]>

  export type AttributeSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    athleteId?: boolean
    createdAt?: boolean
    userId?: boolean
    favorite?: boolean
    mvp?: boolean
    comment?: boolean
    ranking?: boolean
    values?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attributeSubmission"]>

  export type AttributeSubmissionSelectScalar = {
    id?: boolean
    athleteId?: boolean
    createdAt?: boolean
    userId?: boolean
    favorite?: boolean
    mvp?: boolean
    comment?: boolean
    ranking?: boolean
    values?: boolean
  }

  export type AttributeSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "athleteId" | "createdAt" | "userId" | "favorite" | "mvp" | "comment" | "ranking" | "values", ExtArgs["result"]["attributeSubmission"]>
  export type AttributeSubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttributeSubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttributeSubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AttributeSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttributeSubmission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      athleteId: string
      createdAt: Date
      userId: string
      favorite: boolean
      mvp: boolean | null
      comment: string | null
      ranking: string | null
      values: Prisma.JsonValue
    }, ExtArgs["result"]["attributeSubmission"]>
    composites: {}
  }

  type AttributeSubmissionGetPayload<S extends boolean | null | undefined | AttributeSubmissionDefaultArgs> = $Result.GetResult<Prisma.$AttributeSubmissionPayload, S>

  type AttributeSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttributeSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttributeSubmissionCountAggregateInputType | true
    }

  export interface AttributeSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttributeSubmission'], meta: { name: 'AttributeSubmission' } }
    /**
     * Find zero or one AttributeSubmission that matches the filter.
     * @param {AttributeSubmissionFindUniqueArgs} args - Arguments to find a AttributeSubmission
     * @example
     * // Get one AttributeSubmission
     * const attributeSubmission = await prisma.attributeSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttributeSubmissionFindUniqueArgs>(args: SelectSubset<T, AttributeSubmissionFindUniqueArgs<ExtArgs>>): Prisma__AttributeSubmissionClient<$Result.GetResult<Prisma.$AttributeSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttributeSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttributeSubmissionFindUniqueOrThrowArgs} args - Arguments to find a AttributeSubmission
     * @example
     * // Get one AttributeSubmission
     * const attributeSubmission = await prisma.attributeSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttributeSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, AttributeSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttributeSubmissionClient<$Result.GetResult<Prisma.$AttributeSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttributeSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeSubmissionFindFirstArgs} args - Arguments to find a AttributeSubmission
     * @example
     * // Get one AttributeSubmission
     * const attributeSubmission = await prisma.attributeSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttributeSubmissionFindFirstArgs>(args?: SelectSubset<T, AttributeSubmissionFindFirstArgs<ExtArgs>>): Prisma__AttributeSubmissionClient<$Result.GetResult<Prisma.$AttributeSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttributeSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeSubmissionFindFirstOrThrowArgs} args - Arguments to find a AttributeSubmission
     * @example
     * // Get one AttributeSubmission
     * const attributeSubmission = await prisma.attributeSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttributeSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, AttributeSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttributeSubmissionClient<$Result.GetResult<Prisma.$AttributeSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttributeSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttributeSubmissions
     * const attributeSubmissions = await prisma.attributeSubmission.findMany()
     * 
     * // Get first 10 AttributeSubmissions
     * const attributeSubmissions = await prisma.attributeSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attributeSubmissionWithIdOnly = await prisma.attributeSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttributeSubmissionFindManyArgs>(args?: SelectSubset<T, AttributeSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttributeSubmission.
     * @param {AttributeSubmissionCreateArgs} args - Arguments to create a AttributeSubmission.
     * @example
     * // Create one AttributeSubmission
     * const AttributeSubmission = await prisma.attributeSubmission.create({
     *   data: {
     *     // ... data to create a AttributeSubmission
     *   }
     * })
     * 
     */
    create<T extends AttributeSubmissionCreateArgs>(args: SelectSubset<T, AttributeSubmissionCreateArgs<ExtArgs>>): Prisma__AttributeSubmissionClient<$Result.GetResult<Prisma.$AttributeSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttributeSubmissions.
     * @param {AttributeSubmissionCreateManyArgs} args - Arguments to create many AttributeSubmissions.
     * @example
     * // Create many AttributeSubmissions
     * const attributeSubmission = await prisma.attributeSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttributeSubmissionCreateManyArgs>(args?: SelectSubset<T, AttributeSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttributeSubmissions and returns the data saved in the database.
     * @param {AttributeSubmissionCreateManyAndReturnArgs} args - Arguments to create many AttributeSubmissions.
     * @example
     * // Create many AttributeSubmissions
     * const attributeSubmission = await prisma.attributeSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttributeSubmissions and only return the `id`
     * const attributeSubmissionWithIdOnly = await prisma.attributeSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttributeSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, AttributeSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AttributeSubmission.
     * @param {AttributeSubmissionDeleteArgs} args - Arguments to delete one AttributeSubmission.
     * @example
     * // Delete one AttributeSubmission
     * const AttributeSubmission = await prisma.attributeSubmission.delete({
     *   where: {
     *     // ... filter to delete one AttributeSubmission
     *   }
     * })
     * 
     */
    delete<T extends AttributeSubmissionDeleteArgs>(args: SelectSubset<T, AttributeSubmissionDeleteArgs<ExtArgs>>): Prisma__AttributeSubmissionClient<$Result.GetResult<Prisma.$AttributeSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttributeSubmission.
     * @param {AttributeSubmissionUpdateArgs} args - Arguments to update one AttributeSubmission.
     * @example
     * // Update one AttributeSubmission
     * const attributeSubmission = await prisma.attributeSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttributeSubmissionUpdateArgs>(args: SelectSubset<T, AttributeSubmissionUpdateArgs<ExtArgs>>): Prisma__AttributeSubmissionClient<$Result.GetResult<Prisma.$AttributeSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttributeSubmissions.
     * @param {AttributeSubmissionDeleteManyArgs} args - Arguments to filter AttributeSubmissions to delete.
     * @example
     * // Delete a few AttributeSubmissions
     * const { count } = await prisma.attributeSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttributeSubmissionDeleteManyArgs>(args?: SelectSubset<T, AttributeSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttributeSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttributeSubmissions
     * const attributeSubmission = await prisma.attributeSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttributeSubmissionUpdateManyArgs>(args: SelectSubset<T, AttributeSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttributeSubmissions and returns the data updated in the database.
     * @param {AttributeSubmissionUpdateManyAndReturnArgs} args - Arguments to update many AttributeSubmissions.
     * @example
     * // Update many AttributeSubmissions
     * const attributeSubmission = await prisma.attributeSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AttributeSubmissions and only return the `id`
     * const attributeSubmissionWithIdOnly = await prisma.attributeSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttributeSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, AttributeSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributeSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AttributeSubmission.
     * @param {AttributeSubmissionUpsertArgs} args - Arguments to update or create a AttributeSubmission.
     * @example
     * // Update or create a AttributeSubmission
     * const attributeSubmission = await prisma.attributeSubmission.upsert({
     *   create: {
     *     // ... data to create a AttributeSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttributeSubmission we want to update
     *   }
     * })
     */
    upsert<T extends AttributeSubmissionUpsertArgs>(args: SelectSubset<T, AttributeSubmissionUpsertArgs<ExtArgs>>): Prisma__AttributeSubmissionClient<$Result.GetResult<Prisma.$AttributeSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttributeSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeSubmissionCountArgs} args - Arguments to filter AttributeSubmissions to count.
     * @example
     * // Count the number of AttributeSubmissions
     * const count = await prisma.attributeSubmission.count({
     *   where: {
     *     // ... the filter for the AttributeSubmissions we want to count
     *   }
     * })
    **/
    count<T extends AttributeSubmissionCountArgs>(
      args?: Subset<T, AttributeSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttributeSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttributeSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttributeSubmissionAggregateArgs>(args: Subset<T, AttributeSubmissionAggregateArgs>): Prisma.PrismaPromise<GetAttributeSubmissionAggregateType<T>>

    /**
     * Group by AttributeSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeSubmissionGroupByArgs} args - Group by arguments.
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
      T extends AttributeSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttributeSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: AttributeSubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttributeSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttributeSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttributeSubmission model
   */
  readonly fields: AttributeSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttributeSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttributeSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AttributeSubmission model
   */
  interface AttributeSubmissionFieldRefs {
    readonly id: FieldRef<"AttributeSubmission", 'String'>
    readonly athleteId: FieldRef<"AttributeSubmission", 'String'>
    readonly createdAt: FieldRef<"AttributeSubmission", 'DateTime'>
    readonly userId: FieldRef<"AttributeSubmission", 'String'>
    readonly favorite: FieldRef<"AttributeSubmission", 'Boolean'>
    readonly mvp: FieldRef<"AttributeSubmission", 'Boolean'>
    readonly comment: FieldRef<"AttributeSubmission", 'String'>
    readonly ranking: FieldRef<"AttributeSubmission", 'String'>
    readonly values: FieldRef<"AttributeSubmission", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * AttributeSubmission findUnique
   */
  export type AttributeSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeSubmission
     */
    select?: AttributeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeSubmission
     */
    omit?: AttributeSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which AttributeSubmission to fetch.
     */
    where: AttributeSubmissionWhereUniqueInput
  }

  /**
   * AttributeSubmission findUniqueOrThrow
   */
  export type AttributeSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeSubmission
     */
    select?: AttributeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeSubmission
     */
    omit?: AttributeSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which AttributeSubmission to fetch.
     */
    where: AttributeSubmissionWhereUniqueInput
  }

  /**
   * AttributeSubmission findFirst
   */
  export type AttributeSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeSubmission
     */
    select?: AttributeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeSubmission
     */
    omit?: AttributeSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which AttributeSubmission to fetch.
     */
    where?: AttributeSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeSubmissions to fetch.
     */
    orderBy?: AttributeSubmissionOrderByWithRelationInput | AttributeSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttributeSubmissions.
     */
    cursor?: AttributeSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttributeSubmissions.
     */
    distinct?: AttributeSubmissionScalarFieldEnum | AttributeSubmissionScalarFieldEnum[]
  }

  /**
   * AttributeSubmission findFirstOrThrow
   */
  export type AttributeSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeSubmission
     */
    select?: AttributeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeSubmission
     */
    omit?: AttributeSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which AttributeSubmission to fetch.
     */
    where?: AttributeSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeSubmissions to fetch.
     */
    orderBy?: AttributeSubmissionOrderByWithRelationInput | AttributeSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttributeSubmissions.
     */
    cursor?: AttributeSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttributeSubmissions.
     */
    distinct?: AttributeSubmissionScalarFieldEnum | AttributeSubmissionScalarFieldEnum[]
  }

  /**
   * AttributeSubmission findMany
   */
  export type AttributeSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeSubmission
     */
    select?: AttributeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeSubmission
     */
    omit?: AttributeSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which AttributeSubmissions to fetch.
     */
    where?: AttributeSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttributeSubmissions to fetch.
     */
    orderBy?: AttributeSubmissionOrderByWithRelationInput | AttributeSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttributeSubmissions.
     */
    cursor?: AttributeSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttributeSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttributeSubmissions.
     */
    skip?: number
    distinct?: AttributeSubmissionScalarFieldEnum | AttributeSubmissionScalarFieldEnum[]
  }

  /**
   * AttributeSubmission create
   */
  export type AttributeSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeSubmission
     */
    select?: AttributeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeSubmission
     */
    omit?: AttributeSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a AttributeSubmission.
     */
    data: XOR<AttributeSubmissionCreateInput, AttributeSubmissionUncheckedCreateInput>
  }

  /**
   * AttributeSubmission createMany
   */
  export type AttributeSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttributeSubmissions.
     */
    data: AttributeSubmissionCreateManyInput | AttributeSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttributeSubmission createManyAndReturn
   */
  export type AttributeSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeSubmission
     */
    select?: AttributeSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeSubmission
     */
    omit?: AttributeSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many AttributeSubmissions.
     */
    data: AttributeSubmissionCreateManyInput | AttributeSubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeSubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttributeSubmission update
   */
  export type AttributeSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeSubmission
     */
    select?: AttributeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeSubmission
     */
    omit?: AttributeSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a AttributeSubmission.
     */
    data: XOR<AttributeSubmissionUpdateInput, AttributeSubmissionUncheckedUpdateInput>
    /**
     * Choose, which AttributeSubmission to update.
     */
    where: AttributeSubmissionWhereUniqueInput
  }

  /**
   * AttributeSubmission updateMany
   */
  export type AttributeSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttributeSubmissions.
     */
    data: XOR<AttributeSubmissionUpdateManyMutationInput, AttributeSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which AttributeSubmissions to update
     */
    where?: AttributeSubmissionWhereInput
    /**
     * Limit how many AttributeSubmissions to update.
     */
    limit?: number
  }

  /**
   * AttributeSubmission updateManyAndReturn
   */
  export type AttributeSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeSubmission
     */
    select?: AttributeSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeSubmission
     */
    omit?: AttributeSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update AttributeSubmissions.
     */
    data: XOR<AttributeSubmissionUpdateManyMutationInput, AttributeSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which AttributeSubmissions to update
     */
    where?: AttributeSubmissionWhereInput
    /**
     * Limit how many AttributeSubmissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeSubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttributeSubmission upsert
   */
  export type AttributeSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeSubmission
     */
    select?: AttributeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeSubmission
     */
    omit?: AttributeSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeSubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the AttributeSubmission to update in case it exists.
     */
    where: AttributeSubmissionWhereUniqueInput
    /**
     * In case the AttributeSubmission found by the `where` argument doesn't exist, create a new AttributeSubmission with this data.
     */
    create: XOR<AttributeSubmissionCreateInput, AttributeSubmissionUncheckedCreateInput>
    /**
     * In case the AttributeSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttributeSubmissionUpdateInput, AttributeSubmissionUncheckedUpdateInput>
  }

  /**
   * AttributeSubmission delete
   */
  export type AttributeSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeSubmission
     */
    select?: AttributeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeSubmission
     */
    omit?: AttributeSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeSubmissionInclude<ExtArgs> | null
    /**
     * Filter which AttributeSubmission to delete.
     */
    where: AttributeSubmissionWhereUniqueInput
  }

  /**
   * AttributeSubmission deleteMany
   */
  export type AttributeSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttributeSubmissions to delete
     */
    where?: AttributeSubmissionWhereInput
    /**
     * Limit how many AttributeSubmissions to delete.
     */
    limit?: number
  }

  /**
   * AttributeSubmission without action
   */
  export type AttributeSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttributeSubmission
     */
    select?: AttributeSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttributeSubmission
     */
    omit?: AttributeSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttributeSubmissionInclude<ExtArgs> | null
  }


  /**
   * Model BuildTeam
   */

  export type AggregateBuildTeam = {
    _count: BuildTeamCountAggregateOutputType | null
    _min: BuildTeamMinAggregateOutputType | null
    _max: BuildTeamMaxAggregateOutputType | null
  }

  export type BuildTeamMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type BuildTeamMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type BuildTeamCountAggregateOutputType = {
    id: number
    userId: number
    athleteIds: number
    createdAt: number
    _all: number
  }


  export type BuildTeamMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
  }

  export type BuildTeamMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
  }

  export type BuildTeamCountAggregateInputType = {
    id?: true
    userId?: true
    athleteIds?: true
    createdAt?: true
    _all?: true
  }

  export type BuildTeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BuildTeam to aggregate.
     */
    where?: BuildTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuildTeams to fetch.
     */
    orderBy?: BuildTeamOrderByWithRelationInput | BuildTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuildTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuildTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuildTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BuildTeams
    **/
    _count?: true | BuildTeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuildTeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuildTeamMaxAggregateInputType
  }

  export type GetBuildTeamAggregateType<T extends BuildTeamAggregateArgs> = {
        [P in keyof T & keyof AggregateBuildTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuildTeam[P]>
      : GetScalarType<T[P], AggregateBuildTeam[P]>
  }




  export type BuildTeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildTeamWhereInput
    orderBy?: BuildTeamOrderByWithAggregationInput | BuildTeamOrderByWithAggregationInput[]
    by: BuildTeamScalarFieldEnum[] | BuildTeamScalarFieldEnum
    having?: BuildTeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuildTeamCountAggregateInputType | true
    _min?: BuildTeamMinAggregateInputType
    _max?: BuildTeamMaxAggregateInputType
  }

  export type BuildTeamGroupByOutputType = {
    id: string
    userId: string
    athleteIds: string[]
    createdAt: Date
    _count: BuildTeamCountAggregateOutputType | null
    _min: BuildTeamMinAggregateOutputType | null
    _max: BuildTeamMaxAggregateOutputType | null
  }

  type GetBuildTeamGroupByPayload<T extends BuildTeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuildTeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuildTeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuildTeamGroupByOutputType[P]>
            : GetScalarType<T[P], BuildTeamGroupByOutputType[P]>
        }
      >
    >


  export type BuildTeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    athleteIds?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buildTeam"]>

  export type BuildTeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    athleteIds?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buildTeam"]>

  export type BuildTeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    athleteIds?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buildTeam"]>

  export type BuildTeamSelectScalar = {
    id?: boolean
    userId?: boolean
    athleteIds?: boolean
    createdAt?: boolean
  }

  export type BuildTeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "athleteIds" | "createdAt", ExtArgs["result"]["buildTeam"]>
  export type BuildTeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BuildTeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BuildTeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BuildTeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BuildTeam"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      athleteIds: string[]
      createdAt: Date
    }, ExtArgs["result"]["buildTeam"]>
    composites: {}
  }

  type BuildTeamGetPayload<S extends boolean | null | undefined | BuildTeamDefaultArgs> = $Result.GetResult<Prisma.$BuildTeamPayload, S>

  type BuildTeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BuildTeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BuildTeamCountAggregateInputType | true
    }

  export interface BuildTeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BuildTeam'], meta: { name: 'BuildTeam' } }
    /**
     * Find zero or one BuildTeam that matches the filter.
     * @param {BuildTeamFindUniqueArgs} args - Arguments to find a BuildTeam
     * @example
     * // Get one BuildTeam
     * const buildTeam = await prisma.buildTeam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BuildTeamFindUniqueArgs>(args: SelectSubset<T, BuildTeamFindUniqueArgs<ExtArgs>>): Prisma__BuildTeamClient<$Result.GetResult<Prisma.$BuildTeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BuildTeam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BuildTeamFindUniqueOrThrowArgs} args - Arguments to find a BuildTeam
     * @example
     * // Get one BuildTeam
     * const buildTeam = await prisma.buildTeam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BuildTeamFindUniqueOrThrowArgs>(args: SelectSubset<T, BuildTeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BuildTeamClient<$Result.GetResult<Prisma.$BuildTeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BuildTeam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildTeamFindFirstArgs} args - Arguments to find a BuildTeam
     * @example
     * // Get one BuildTeam
     * const buildTeam = await prisma.buildTeam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BuildTeamFindFirstArgs>(args?: SelectSubset<T, BuildTeamFindFirstArgs<ExtArgs>>): Prisma__BuildTeamClient<$Result.GetResult<Prisma.$BuildTeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BuildTeam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildTeamFindFirstOrThrowArgs} args - Arguments to find a BuildTeam
     * @example
     * // Get one BuildTeam
     * const buildTeam = await prisma.buildTeam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BuildTeamFindFirstOrThrowArgs>(args?: SelectSubset<T, BuildTeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__BuildTeamClient<$Result.GetResult<Prisma.$BuildTeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BuildTeams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildTeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BuildTeams
     * const buildTeams = await prisma.buildTeam.findMany()
     * 
     * // Get first 10 BuildTeams
     * const buildTeams = await prisma.buildTeam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buildTeamWithIdOnly = await prisma.buildTeam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BuildTeamFindManyArgs>(args?: SelectSubset<T, BuildTeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildTeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BuildTeam.
     * @param {BuildTeamCreateArgs} args - Arguments to create a BuildTeam.
     * @example
     * // Create one BuildTeam
     * const BuildTeam = await prisma.buildTeam.create({
     *   data: {
     *     // ... data to create a BuildTeam
     *   }
     * })
     * 
     */
    create<T extends BuildTeamCreateArgs>(args: SelectSubset<T, BuildTeamCreateArgs<ExtArgs>>): Prisma__BuildTeamClient<$Result.GetResult<Prisma.$BuildTeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BuildTeams.
     * @param {BuildTeamCreateManyArgs} args - Arguments to create many BuildTeams.
     * @example
     * // Create many BuildTeams
     * const buildTeam = await prisma.buildTeam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BuildTeamCreateManyArgs>(args?: SelectSubset<T, BuildTeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BuildTeams and returns the data saved in the database.
     * @param {BuildTeamCreateManyAndReturnArgs} args - Arguments to create many BuildTeams.
     * @example
     * // Create many BuildTeams
     * const buildTeam = await prisma.buildTeam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BuildTeams and only return the `id`
     * const buildTeamWithIdOnly = await prisma.buildTeam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BuildTeamCreateManyAndReturnArgs>(args?: SelectSubset<T, BuildTeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildTeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BuildTeam.
     * @param {BuildTeamDeleteArgs} args - Arguments to delete one BuildTeam.
     * @example
     * // Delete one BuildTeam
     * const BuildTeam = await prisma.buildTeam.delete({
     *   where: {
     *     // ... filter to delete one BuildTeam
     *   }
     * })
     * 
     */
    delete<T extends BuildTeamDeleteArgs>(args: SelectSubset<T, BuildTeamDeleteArgs<ExtArgs>>): Prisma__BuildTeamClient<$Result.GetResult<Prisma.$BuildTeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BuildTeam.
     * @param {BuildTeamUpdateArgs} args - Arguments to update one BuildTeam.
     * @example
     * // Update one BuildTeam
     * const buildTeam = await prisma.buildTeam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BuildTeamUpdateArgs>(args: SelectSubset<T, BuildTeamUpdateArgs<ExtArgs>>): Prisma__BuildTeamClient<$Result.GetResult<Prisma.$BuildTeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BuildTeams.
     * @param {BuildTeamDeleteManyArgs} args - Arguments to filter BuildTeams to delete.
     * @example
     * // Delete a few BuildTeams
     * const { count } = await prisma.buildTeam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BuildTeamDeleteManyArgs>(args?: SelectSubset<T, BuildTeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BuildTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildTeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BuildTeams
     * const buildTeam = await prisma.buildTeam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BuildTeamUpdateManyArgs>(args: SelectSubset<T, BuildTeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BuildTeams and returns the data updated in the database.
     * @param {BuildTeamUpdateManyAndReturnArgs} args - Arguments to update many BuildTeams.
     * @example
     * // Update many BuildTeams
     * const buildTeam = await prisma.buildTeam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BuildTeams and only return the `id`
     * const buildTeamWithIdOnly = await prisma.buildTeam.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BuildTeamUpdateManyAndReturnArgs>(args: SelectSubset<T, BuildTeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildTeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BuildTeam.
     * @param {BuildTeamUpsertArgs} args - Arguments to update or create a BuildTeam.
     * @example
     * // Update or create a BuildTeam
     * const buildTeam = await prisma.buildTeam.upsert({
     *   create: {
     *     // ... data to create a BuildTeam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BuildTeam we want to update
     *   }
     * })
     */
    upsert<T extends BuildTeamUpsertArgs>(args: SelectSubset<T, BuildTeamUpsertArgs<ExtArgs>>): Prisma__BuildTeamClient<$Result.GetResult<Prisma.$BuildTeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BuildTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildTeamCountArgs} args - Arguments to filter BuildTeams to count.
     * @example
     * // Count the number of BuildTeams
     * const count = await prisma.buildTeam.count({
     *   where: {
     *     // ... the filter for the BuildTeams we want to count
     *   }
     * })
    **/
    count<T extends BuildTeamCountArgs>(
      args?: Subset<T, BuildTeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuildTeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BuildTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildTeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BuildTeamAggregateArgs>(args: Subset<T, BuildTeamAggregateArgs>): Prisma.PrismaPromise<GetBuildTeamAggregateType<T>>

    /**
     * Group by BuildTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildTeamGroupByArgs} args - Group by arguments.
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
      T extends BuildTeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuildTeamGroupByArgs['orderBy'] }
        : { orderBy?: BuildTeamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BuildTeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuildTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BuildTeam model
   */
  readonly fields: BuildTeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BuildTeam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BuildTeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BuildTeam model
   */
  interface BuildTeamFieldRefs {
    readonly id: FieldRef<"BuildTeam", 'String'>
    readonly userId: FieldRef<"BuildTeam", 'String'>
    readonly athleteIds: FieldRef<"BuildTeam", 'String[]'>
    readonly createdAt: FieldRef<"BuildTeam", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BuildTeam findUnique
   */
  export type BuildTeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildTeam
     */
    select?: BuildTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildTeam
     */
    omit?: BuildTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildTeamInclude<ExtArgs> | null
    /**
     * Filter, which BuildTeam to fetch.
     */
    where: BuildTeamWhereUniqueInput
  }

  /**
   * BuildTeam findUniqueOrThrow
   */
  export type BuildTeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildTeam
     */
    select?: BuildTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildTeam
     */
    omit?: BuildTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildTeamInclude<ExtArgs> | null
    /**
     * Filter, which BuildTeam to fetch.
     */
    where: BuildTeamWhereUniqueInput
  }

  /**
   * BuildTeam findFirst
   */
  export type BuildTeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildTeam
     */
    select?: BuildTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildTeam
     */
    omit?: BuildTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildTeamInclude<ExtArgs> | null
    /**
     * Filter, which BuildTeam to fetch.
     */
    where?: BuildTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuildTeams to fetch.
     */
    orderBy?: BuildTeamOrderByWithRelationInput | BuildTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BuildTeams.
     */
    cursor?: BuildTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuildTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuildTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BuildTeams.
     */
    distinct?: BuildTeamScalarFieldEnum | BuildTeamScalarFieldEnum[]
  }

  /**
   * BuildTeam findFirstOrThrow
   */
  export type BuildTeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildTeam
     */
    select?: BuildTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildTeam
     */
    omit?: BuildTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildTeamInclude<ExtArgs> | null
    /**
     * Filter, which BuildTeam to fetch.
     */
    where?: BuildTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuildTeams to fetch.
     */
    orderBy?: BuildTeamOrderByWithRelationInput | BuildTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BuildTeams.
     */
    cursor?: BuildTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuildTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuildTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BuildTeams.
     */
    distinct?: BuildTeamScalarFieldEnum | BuildTeamScalarFieldEnum[]
  }

  /**
   * BuildTeam findMany
   */
  export type BuildTeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildTeam
     */
    select?: BuildTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildTeam
     */
    omit?: BuildTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildTeamInclude<ExtArgs> | null
    /**
     * Filter, which BuildTeams to fetch.
     */
    where?: BuildTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BuildTeams to fetch.
     */
    orderBy?: BuildTeamOrderByWithRelationInput | BuildTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BuildTeams.
     */
    cursor?: BuildTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BuildTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BuildTeams.
     */
    skip?: number
    distinct?: BuildTeamScalarFieldEnum | BuildTeamScalarFieldEnum[]
  }

  /**
   * BuildTeam create
   */
  export type BuildTeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildTeam
     */
    select?: BuildTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildTeam
     */
    omit?: BuildTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildTeamInclude<ExtArgs> | null
    /**
     * The data needed to create a BuildTeam.
     */
    data: XOR<BuildTeamCreateInput, BuildTeamUncheckedCreateInput>
  }

  /**
   * BuildTeam createMany
   */
  export type BuildTeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BuildTeams.
     */
    data: BuildTeamCreateManyInput | BuildTeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BuildTeam createManyAndReturn
   */
  export type BuildTeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildTeam
     */
    select?: BuildTeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BuildTeam
     */
    omit?: BuildTeamOmit<ExtArgs> | null
    /**
     * The data used to create many BuildTeams.
     */
    data: BuildTeamCreateManyInput | BuildTeamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildTeamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BuildTeam update
   */
  export type BuildTeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildTeam
     */
    select?: BuildTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildTeam
     */
    omit?: BuildTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildTeamInclude<ExtArgs> | null
    /**
     * The data needed to update a BuildTeam.
     */
    data: XOR<BuildTeamUpdateInput, BuildTeamUncheckedUpdateInput>
    /**
     * Choose, which BuildTeam to update.
     */
    where: BuildTeamWhereUniqueInput
  }

  /**
   * BuildTeam updateMany
   */
  export type BuildTeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BuildTeams.
     */
    data: XOR<BuildTeamUpdateManyMutationInput, BuildTeamUncheckedUpdateManyInput>
    /**
     * Filter which BuildTeams to update
     */
    where?: BuildTeamWhereInput
    /**
     * Limit how many BuildTeams to update.
     */
    limit?: number
  }

  /**
   * BuildTeam updateManyAndReturn
   */
  export type BuildTeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildTeam
     */
    select?: BuildTeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BuildTeam
     */
    omit?: BuildTeamOmit<ExtArgs> | null
    /**
     * The data used to update BuildTeams.
     */
    data: XOR<BuildTeamUpdateManyMutationInput, BuildTeamUncheckedUpdateManyInput>
    /**
     * Filter which BuildTeams to update
     */
    where?: BuildTeamWhereInput
    /**
     * Limit how many BuildTeams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildTeamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BuildTeam upsert
   */
  export type BuildTeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildTeam
     */
    select?: BuildTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildTeam
     */
    omit?: BuildTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildTeamInclude<ExtArgs> | null
    /**
     * The filter to search for the BuildTeam to update in case it exists.
     */
    where: BuildTeamWhereUniqueInput
    /**
     * In case the BuildTeam found by the `where` argument doesn't exist, create a new BuildTeam with this data.
     */
    create: XOR<BuildTeamCreateInput, BuildTeamUncheckedCreateInput>
    /**
     * In case the BuildTeam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuildTeamUpdateInput, BuildTeamUncheckedUpdateInput>
  }

  /**
   * BuildTeam delete
   */
  export type BuildTeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildTeam
     */
    select?: BuildTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildTeam
     */
    omit?: BuildTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildTeamInclude<ExtArgs> | null
    /**
     * Filter which BuildTeam to delete.
     */
    where: BuildTeamWhereUniqueInput
  }

  /**
   * BuildTeam deleteMany
   */
  export type BuildTeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BuildTeams to delete
     */
    where?: BuildTeamWhereInput
    /**
     * Limit how many BuildTeams to delete.
     */
    limit?: number
  }

  /**
   * BuildTeam without action
   */
  export type BuildTeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BuildTeam
     */
    select?: BuildTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BuildTeam
     */
    omit?: BuildTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildTeamInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AttributeSubmissionScalarFieldEnum: {
    id: 'id',
    athleteId: 'athleteId',
    createdAt: 'createdAt',
    userId: 'userId',
    favorite: 'favorite',
    mvp: 'mvp',
    comment: 'comment',
    ranking: 'ranking',
    values: 'values'
  };

  export type AttributeSubmissionScalarFieldEnum = (typeof AttributeSubmissionScalarFieldEnum)[keyof typeof AttributeSubmissionScalarFieldEnum]


  export const BuildTeamScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    athleteIds: 'athleteIds',
    createdAt: 'createdAt'
  };

  export type BuildTeamScalarFieldEnum = (typeof BuildTeamScalarFieldEnum)[keyof typeof BuildTeamScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    submissions?: AttributeSubmissionListRelationFilter
    teams?: BuildTeamListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    submissions?: AttributeSubmissionOrderByRelationAggregateInput
    teams?: BuildTeamOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    submissions?: AttributeSubmissionListRelationFilter
    teams?: BuildTeamListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AttributeSubmissionWhereInput = {
    AND?: AttributeSubmissionWhereInput | AttributeSubmissionWhereInput[]
    OR?: AttributeSubmissionWhereInput[]
    NOT?: AttributeSubmissionWhereInput | AttributeSubmissionWhereInput[]
    id?: StringFilter<"AttributeSubmission"> | string
    athleteId?: StringFilter<"AttributeSubmission"> | string
    createdAt?: DateTimeFilter<"AttributeSubmission"> | Date | string
    userId?: StringFilter<"AttributeSubmission"> | string
    favorite?: BoolFilter<"AttributeSubmission"> | boolean
    mvp?: BoolNullableFilter<"AttributeSubmission"> | boolean | null
    comment?: StringNullableFilter<"AttributeSubmission"> | string | null
    ranking?: StringNullableFilter<"AttributeSubmission"> | string | null
    values?: JsonFilter<"AttributeSubmission">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AttributeSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    athleteId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    favorite?: SortOrder
    mvp?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    ranking?: SortOrderInput | SortOrder
    values?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AttributeSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttributeSubmissionWhereInput | AttributeSubmissionWhereInput[]
    OR?: AttributeSubmissionWhereInput[]
    NOT?: AttributeSubmissionWhereInput | AttributeSubmissionWhereInput[]
    athleteId?: StringFilter<"AttributeSubmission"> | string
    createdAt?: DateTimeFilter<"AttributeSubmission"> | Date | string
    userId?: StringFilter<"AttributeSubmission"> | string
    favorite?: BoolFilter<"AttributeSubmission"> | boolean
    mvp?: BoolNullableFilter<"AttributeSubmission"> | boolean | null
    comment?: StringNullableFilter<"AttributeSubmission"> | string | null
    ranking?: StringNullableFilter<"AttributeSubmission"> | string | null
    values?: JsonFilter<"AttributeSubmission">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AttributeSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    athleteId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    favorite?: SortOrder
    mvp?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    ranking?: SortOrderInput | SortOrder
    values?: SortOrder
    _count?: AttributeSubmissionCountOrderByAggregateInput
    _max?: AttributeSubmissionMaxOrderByAggregateInput
    _min?: AttributeSubmissionMinOrderByAggregateInput
  }

  export type AttributeSubmissionScalarWhereWithAggregatesInput = {
    AND?: AttributeSubmissionScalarWhereWithAggregatesInput | AttributeSubmissionScalarWhereWithAggregatesInput[]
    OR?: AttributeSubmissionScalarWhereWithAggregatesInput[]
    NOT?: AttributeSubmissionScalarWhereWithAggregatesInput | AttributeSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AttributeSubmission"> | string
    athleteId?: StringWithAggregatesFilter<"AttributeSubmission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AttributeSubmission"> | Date | string
    userId?: StringWithAggregatesFilter<"AttributeSubmission"> | string
    favorite?: BoolWithAggregatesFilter<"AttributeSubmission"> | boolean
    mvp?: BoolNullableWithAggregatesFilter<"AttributeSubmission"> | boolean | null
    comment?: StringNullableWithAggregatesFilter<"AttributeSubmission"> | string | null
    ranking?: StringNullableWithAggregatesFilter<"AttributeSubmission"> | string | null
    values?: JsonWithAggregatesFilter<"AttributeSubmission">
  }

  export type BuildTeamWhereInput = {
    AND?: BuildTeamWhereInput | BuildTeamWhereInput[]
    OR?: BuildTeamWhereInput[]
    NOT?: BuildTeamWhereInput | BuildTeamWhereInput[]
    id?: StringFilter<"BuildTeam"> | string
    userId?: StringFilter<"BuildTeam"> | string
    athleteIds?: StringNullableListFilter<"BuildTeam">
    createdAt?: DateTimeFilter<"BuildTeam"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BuildTeamOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    athleteIds?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BuildTeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BuildTeamWhereInput | BuildTeamWhereInput[]
    OR?: BuildTeamWhereInput[]
    NOT?: BuildTeamWhereInput | BuildTeamWhereInput[]
    userId?: StringFilter<"BuildTeam"> | string
    athleteIds?: StringNullableListFilter<"BuildTeam">
    createdAt?: DateTimeFilter<"BuildTeam"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BuildTeamOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    athleteIds?: SortOrder
    createdAt?: SortOrder
    _count?: BuildTeamCountOrderByAggregateInput
    _max?: BuildTeamMaxOrderByAggregateInput
    _min?: BuildTeamMinOrderByAggregateInput
  }

  export type BuildTeamScalarWhereWithAggregatesInput = {
    AND?: BuildTeamScalarWhereWithAggregatesInput | BuildTeamScalarWhereWithAggregatesInput[]
    OR?: BuildTeamScalarWhereWithAggregatesInput[]
    NOT?: BuildTeamScalarWhereWithAggregatesInput | BuildTeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BuildTeam"> | string
    userId?: StringWithAggregatesFilter<"BuildTeam"> | string
    athleteIds?: StringNullableListFilter<"BuildTeam">
    createdAt?: DateTimeWithAggregatesFilter<"BuildTeam"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    submissions?: AttributeSubmissionCreateNestedManyWithoutUserInput
    teams?: BuildTeamCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    submissions?: AttributeSubmissionUncheckedCreateNestedManyWithoutUserInput
    teams?: BuildTeamUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: AttributeSubmissionUpdateManyWithoutUserNestedInput
    teams?: BuildTeamUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: AttributeSubmissionUncheckedUpdateManyWithoutUserNestedInput
    teams?: BuildTeamUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttributeSubmissionCreateInput = {
    id?: string
    athleteId: string
    createdAt?: Date | string
    favorite?: boolean
    mvp?: boolean | null
    comment?: string | null
    ranking?: string | null
    values: JsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutSubmissionsInput
  }

  export type AttributeSubmissionUncheckedCreateInput = {
    id?: string
    athleteId: string
    createdAt?: Date | string
    userId: string
    favorite?: boolean
    mvp?: boolean | null
    comment?: string | null
    ranking?: string | null
    values: JsonNullValueInput | InputJsonValue
  }

  export type AttributeSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    athleteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    mvp?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    ranking?: NullableStringFieldUpdateOperationsInput | string | null
    values?: JsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type AttributeSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    athleteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    mvp?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    ranking?: NullableStringFieldUpdateOperationsInput | string | null
    values?: JsonNullValueInput | InputJsonValue
  }

  export type AttributeSubmissionCreateManyInput = {
    id?: string
    athleteId: string
    createdAt?: Date | string
    userId: string
    favorite?: boolean
    mvp?: boolean | null
    comment?: string | null
    ranking?: string | null
    values: JsonNullValueInput | InputJsonValue
  }

  export type AttributeSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    athleteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    mvp?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    ranking?: NullableStringFieldUpdateOperationsInput | string | null
    values?: JsonNullValueInput | InputJsonValue
  }

  export type AttributeSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    athleteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    mvp?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    ranking?: NullableStringFieldUpdateOperationsInput | string | null
    values?: JsonNullValueInput | InputJsonValue
  }

  export type BuildTeamCreateInput = {
    id?: string
    athleteIds?: BuildTeamCreateathleteIdsInput | string[]
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTeamsInput
  }

  export type BuildTeamUncheckedCreateInput = {
    id?: string
    userId: string
    athleteIds?: BuildTeamCreateathleteIdsInput | string[]
    createdAt?: Date | string
  }

  export type BuildTeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    athleteIds?: BuildTeamUpdateathleteIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type BuildTeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    athleteIds?: BuildTeamUpdateathleteIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildTeamCreateManyInput = {
    id?: string
    userId: string
    athleteIds?: BuildTeamCreateathleteIdsInput | string[]
    createdAt?: Date | string
  }

  export type BuildTeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    athleteIds?: BuildTeamUpdateathleteIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildTeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    athleteIds?: BuildTeamUpdateathleteIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AttributeSubmissionListRelationFilter = {
    every?: AttributeSubmissionWhereInput
    some?: AttributeSubmissionWhereInput
    none?: AttributeSubmissionWhereInput
  }

  export type BuildTeamListRelationFilter = {
    every?: BuildTeamWhereInput
    some?: BuildTeamWhereInput
    none?: BuildTeamWhereInput
  }

  export type AttributeSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BuildTeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AttributeSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    athleteId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    favorite?: SortOrder
    mvp?: SortOrder
    comment?: SortOrder
    ranking?: SortOrder
    values?: SortOrder
  }

  export type AttributeSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    athleteId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    favorite?: SortOrder
    mvp?: SortOrder
    comment?: SortOrder
    ranking?: SortOrder
  }

  export type AttributeSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    athleteId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    favorite?: SortOrder
    mvp?: SortOrder
    comment?: SortOrder
    ranking?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BuildTeamCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    athleteIds?: SortOrder
    createdAt?: SortOrder
  }

  export type BuildTeamMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type BuildTeamMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type AttributeSubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<AttributeSubmissionCreateWithoutUserInput, AttributeSubmissionUncheckedCreateWithoutUserInput> | AttributeSubmissionCreateWithoutUserInput[] | AttributeSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttributeSubmissionCreateOrConnectWithoutUserInput | AttributeSubmissionCreateOrConnectWithoutUserInput[]
    createMany?: AttributeSubmissionCreateManyUserInputEnvelope
    connect?: AttributeSubmissionWhereUniqueInput | AttributeSubmissionWhereUniqueInput[]
  }

  export type BuildTeamCreateNestedManyWithoutUserInput = {
    create?: XOR<BuildTeamCreateWithoutUserInput, BuildTeamUncheckedCreateWithoutUserInput> | BuildTeamCreateWithoutUserInput[] | BuildTeamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BuildTeamCreateOrConnectWithoutUserInput | BuildTeamCreateOrConnectWithoutUserInput[]
    createMany?: BuildTeamCreateManyUserInputEnvelope
    connect?: BuildTeamWhereUniqueInput | BuildTeamWhereUniqueInput[]
  }

  export type AttributeSubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AttributeSubmissionCreateWithoutUserInput, AttributeSubmissionUncheckedCreateWithoutUserInput> | AttributeSubmissionCreateWithoutUserInput[] | AttributeSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttributeSubmissionCreateOrConnectWithoutUserInput | AttributeSubmissionCreateOrConnectWithoutUserInput[]
    createMany?: AttributeSubmissionCreateManyUserInputEnvelope
    connect?: AttributeSubmissionWhereUniqueInput | AttributeSubmissionWhereUniqueInput[]
  }

  export type BuildTeamUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BuildTeamCreateWithoutUserInput, BuildTeamUncheckedCreateWithoutUserInput> | BuildTeamCreateWithoutUserInput[] | BuildTeamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BuildTeamCreateOrConnectWithoutUserInput | BuildTeamCreateOrConnectWithoutUserInput[]
    createMany?: BuildTeamCreateManyUserInputEnvelope
    connect?: BuildTeamWhereUniqueInput | BuildTeamWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AttributeSubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttributeSubmissionCreateWithoutUserInput, AttributeSubmissionUncheckedCreateWithoutUserInput> | AttributeSubmissionCreateWithoutUserInput[] | AttributeSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttributeSubmissionCreateOrConnectWithoutUserInput | AttributeSubmissionCreateOrConnectWithoutUserInput[]
    upsert?: AttributeSubmissionUpsertWithWhereUniqueWithoutUserInput | AttributeSubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttributeSubmissionCreateManyUserInputEnvelope
    set?: AttributeSubmissionWhereUniqueInput | AttributeSubmissionWhereUniqueInput[]
    disconnect?: AttributeSubmissionWhereUniqueInput | AttributeSubmissionWhereUniqueInput[]
    delete?: AttributeSubmissionWhereUniqueInput | AttributeSubmissionWhereUniqueInput[]
    connect?: AttributeSubmissionWhereUniqueInput | AttributeSubmissionWhereUniqueInput[]
    update?: AttributeSubmissionUpdateWithWhereUniqueWithoutUserInput | AttributeSubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttributeSubmissionUpdateManyWithWhereWithoutUserInput | AttributeSubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttributeSubmissionScalarWhereInput | AttributeSubmissionScalarWhereInput[]
  }

  export type BuildTeamUpdateManyWithoutUserNestedInput = {
    create?: XOR<BuildTeamCreateWithoutUserInput, BuildTeamUncheckedCreateWithoutUserInput> | BuildTeamCreateWithoutUserInput[] | BuildTeamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BuildTeamCreateOrConnectWithoutUserInput | BuildTeamCreateOrConnectWithoutUserInput[]
    upsert?: BuildTeamUpsertWithWhereUniqueWithoutUserInput | BuildTeamUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BuildTeamCreateManyUserInputEnvelope
    set?: BuildTeamWhereUniqueInput | BuildTeamWhereUniqueInput[]
    disconnect?: BuildTeamWhereUniqueInput | BuildTeamWhereUniqueInput[]
    delete?: BuildTeamWhereUniqueInput | BuildTeamWhereUniqueInput[]
    connect?: BuildTeamWhereUniqueInput | BuildTeamWhereUniqueInput[]
    update?: BuildTeamUpdateWithWhereUniqueWithoutUserInput | BuildTeamUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BuildTeamUpdateManyWithWhereWithoutUserInput | BuildTeamUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BuildTeamScalarWhereInput | BuildTeamScalarWhereInput[]
  }

  export type AttributeSubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttributeSubmissionCreateWithoutUserInput, AttributeSubmissionUncheckedCreateWithoutUserInput> | AttributeSubmissionCreateWithoutUserInput[] | AttributeSubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttributeSubmissionCreateOrConnectWithoutUserInput | AttributeSubmissionCreateOrConnectWithoutUserInput[]
    upsert?: AttributeSubmissionUpsertWithWhereUniqueWithoutUserInput | AttributeSubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttributeSubmissionCreateManyUserInputEnvelope
    set?: AttributeSubmissionWhereUniqueInput | AttributeSubmissionWhereUniqueInput[]
    disconnect?: AttributeSubmissionWhereUniqueInput | AttributeSubmissionWhereUniqueInput[]
    delete?: AttributeSubmissionWhereUniqueInput | AttributeSubmissionWhereUniqueInput[]
    connect?: AttributeSubmissionWhereUniqueInput | AttributeSubmissionWhereUniqueInput[]
    update?: AttributeSubmissionUpdateWithWhereUniqueWithoutUserInput | AttributeSubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttributeSubmissionUpdateManyWithWhereWithoutUserInput | AttributeSubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttributeSubmissionScalarWhereInput | AttributeSubmissionScalarWhereInput[]
  }

  export type BuildTeamUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BuildTeamCreateWithoutUserInput, BuildTeamUncheckedCreateWithoutUserInput> | BuildTeamCreateWithoutUserInput[] | BuildTeamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BuildTeamCreateOrConnectWithoutUserInput | BuildTeamCreateOrConnectWithoutUserInput[]
    upsert?: BuildTeamUpsertWithWhereUniqueWithoutUserInput | BuildTeamUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BuildTeamCreateManyUserInputEnvelope
    set?: BuildTeamWhereUniqueInput | BuildTeamWhereUniqueInput[]
    disconnect?: BuildTeamWhereUniqueInput | BuildTeamWhereUniqueInput[]
    delete?: BuildTeamWhereUniqueInput | BuildTeamWhereUniqueInput[]
    connect?: BuildTeamWhereUniqueInput | BuildTeamWhereUniqueInput[]
    update?: BuildTeamUpdateWithWhereUniqueWithoutUserInput | BuildTeamUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BuildTeamUpdateManyWithWhereWithoutUserInput | BuildTeamUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BuildTeamScalarWhereInput | BuildTeamScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    upsert?: UserUpsertWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionsInput, UserUpdateWithoutSubmissionsInput>, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type BuildTeamCreateathleteIdsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutTeamsInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput
    connect?: UserWhereUniqueInput
  }

  export type BuildTeamUpdateathleteIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput
    upsert?: UserUpsertWithoutTeamsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeamsInput, UserUpdateWithoutTeamsInput>, UserUncheckedUpdateWithoutTeamsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AttributeSubmissionCreateWithoutUserInput = {
    id?: string
    athleteId: string
    createdAt?: Date | string
    favorite?: boolean
    mvp?: boolean | null
    comment?: string | null
    ranking?: string | null
    values: JsonNullValueInput | InputJsonValue
  }

  export type AttributeSubmissionUncheckedCreateWithoutUserInput = {
    id?: string
    athleteId: string
    createdAt?: Date | string
    favorite?: boolean
    mvp?: boolean | null
    comment?: string | null
    ranking?: string | null
    values: JsonNullValueInput | InputJsonValue
  }

  export type AttributeSubmissionCreateOrConnectWithoutUserInput = {
    where: AttributeSubmissionWhereUniqueInput
    create: XOR<AttributeSubmissionCreateWithoutUserInput, AttributeSubmissionUncheckedCreateWithoutUserInput>
  }

  export type AttributeSubmissionCreateManyUserInputEnvelope = {
    data: AttributeSubmissionCreateManyUserInput | AttributeSubmissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BuildTeamCreateWithoutUserInput = {
    id?: string
    athleteIds?: BuildTeamCreateathleteIdsInput | string[]
    createdAt?: Date | string
  }

  export type BuildTeamUncheckedCreateWithoutUserInput = {
    id?: string
    athleteIds?: BuildTeamCreateathleteIdsInput | string[]
    createdAt?: Date | string
  }

  export type BuildTeamCreateOrConnectWithoutUserInput = {
    where: BuildTeamWhereUniqueInput
    create: XOR<BuildTeamCreateWithoutUserInput, BuildTeamUncheckedCreateWithoutUserInput>
  }

  export type BuildTeamCreateManyUserInputEnvelope = {
    data: BuildTeamCreateManyUserInput | BuildTeamCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AttributeSubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: AttributeSubmissionWhereUniqueInput
    update: XOR<AttributeSubmissionUpdateWithoutUserInput, AttributeSubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<AttributeSubmissionCreateWithoutUserInput, AttributeSubmissionUncheckedCreateWithoutUserInput>
  }

  export type AttributeSubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: AttributeSubmissionWhereUniqueInput
    data: XOR<AttributeSubmissionUpdateWithoutUserInput, AttributeSubmissionUncheckedUpdateWithoutUserInput>
  }

  export type AttributeSubmissionUpdateManyWithWhereWithoutUserInput = {
    where: AttributeSubmissionScalarWhereInput
    data: XOR<AttributeSubmissionUpdateManyMutationInput, AttributeSubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type AttributeSubmissionScalarWhereInput = {
    AND?: AttributeSubmissionScalarWhereInput | AttributeSubmissionScalarWhereInput[]
    OR?: AttributeSubmissionScalarWhereInput[]
    NOT?: AttributeSubmissionScalarWhereInput | AttributeSubmissionScalarWhereInput[]
    id?: StringFilter<"AttributeSubmission"> | string
    athleteId?: StringFilter<"AttributeSubmission"> | string
    createdAt?: DateTimeFilter<"AttributeSubmission"> | Date | string
    userId?: StringFilter<"AttributeSubmission"> | string
    favorite?: BoolFilter<"AttributeSubmission"> | boolean
    mvp?: BoolNullableFilter<"AttributeSubmission"> | boolean | null
    comment?: StringNullableFilter<"AttributeSubmission"> | string | null
    ranking?: StringNullableFilter<"AttributeSubmission"> | string | null
    values?: JsonFilter<"AttributeSubmission">
  }

  export type BuildTeamUpsertWithWhereUniqueWithoutUserInput = {
    where: BuildTeamWhereUniqueInput
    update: XOR<BuildTeamUpdateWithoutUserInput, BuildTeamUncheckedUpdateWithoutUserInput>
    create: XOR<BuildTeamCreateWithoutUserInput, BuildTeamUncheckedCreateWithoutUserInput>
  }

  export type BuildTeamUpdateWithWhereUniqueWithoutUserInput = {
    where: BuildTeamWhereUniqueInput
    data: XOR<BuildTeamUpdateWithoutUserInput, BuildTeamUncheckedUpdateWithoutUserInput>
  }

  export type BuildTeamUpdateManyWithWhereWithoutUserInput = {
    where: BuildTeamScalarWhereInput
    data: XOR<BuildTeamUpdateManyMutationInput, BuildTeamUncheckedUpdateManyWithoutUserInput>
  }

  export type BuildTeamScalarWhereInput = {
    AND?: BuildTeamScalarWhereInput | BuildTeamScalarWhereInput[]
    OR?: BuildTeamScalarWhereInput[]
    NOT?: BuildTeamScalarWhereInput | BuildTeamScalarWhereInput[]
    id?: StringFilter<"BuildTeam"> | string
    userId?: StringFilter<"BuildTeam"> | string
    athleteIds?: StringNullableListFilter<"BuildTeam">
    createdAt?: DateTimeFilter<"BuildTeam"> | Date | string
  }

  export type UserCreateWithoutSubmissionsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    teams?: BuildTeamCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    teams?: BuildTeamUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
  }

  export type UserUpsertWithoutSubmissionsInput = {
    update: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: BuildTeamUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: BuildTeamUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTeamsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    submissions?: AttributeSubmissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    submissions?: AttributeSubmissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
  }

  export type UserUpsertWithoutTeamsInput = {
    update: XOR<UserUpdateWithoutTeamsInput, UserUncheckedUpdateWithoutTeamsInput>
    create: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeamsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeamsInput, UserUncheckedUpdateWithoutTeamsInput>
  }

  export type UserUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: AttributeSubmissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: AttributeSubmissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AttributeSubmissionCreateManyUserInput = {
    id?: string
    athleteId: string
    createdAt?: Date | string
    favorite?: boolean
    mvp?: boolean | null
    comment?: string | null
    ranking?: string | null
    values: JsonNullValueInput | InputJsonValue
  }

  export type BuildTeamCreateManyUserInput = {
    id?: string
    athleteIds?: BuildTeamCreateathleteIdsInput | string[]
    createdAt?: Date | string
  }

  export type AttributeSubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    athleteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    mvp?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    ranking?: NullableStringFieldUpdateOperationsInput | string | null
    values?: JsonNullValueInput | InputJsonValue
  }

  export type AttributeSubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    athleteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    mvp?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    ranking?: NullableStringFieldUpdateOperationsInput | string | null
    values?: JsonNullValueInput | InputJsonValue
  }

  export type AttributeSubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    athleteId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    mvp?: NullableBoolFieldUpdateOperationsInput | boolean | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    ranking?: NullableStringFieldUpdateOperationsInput | string | null
    values?: JsonNullValueInput | InputJsonValue
  }

  export type BuildTeamUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    athleteIds?: BuildTeamUpdateathleteIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildTeamUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    athleteIds?: BuildTeamUpdateathleteIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildTeamUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    athleteIds?: BuildTeamUpdateathleteIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
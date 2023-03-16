// register-type.d.ts
interface Client {
  query(queryText: string, values: any[]): Promise<any>
  setTypeParser(
    oid: number,
    format: string,
    parseFn: (value: string) => any,
  ): void
}

declare function registerType(client: Client): Promise<void>
declare function toSql(value: any): any

export { registerType, toSql }

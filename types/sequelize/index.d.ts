// vector-type.d.ts
import { Sequelize } from 'sequelize'

declare module 'sequelize' {
  namespace DataTypes {
    interface DataTypes {
      VECTOR: typeof VECTOR
    }

    interface postgres {
      VECTOR: typeof VECTOR
    }
  }

  class VECTOR extends DataTypes.ABSTRACT {
    _dimensions: number | undefined
    constructor(dimensions?: number)

    toSql(): string
    _stringify(value: any): any
    static parse(value: any): any
  }
}

declare function registerType(Sequelize: Sequelize): void

export { registerType }

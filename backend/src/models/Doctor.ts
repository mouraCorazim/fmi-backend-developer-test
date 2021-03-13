import {DataTypes, ModelDefined, Optional} from 'sequelize'
import { DoctorData } from '../types'
import connection from '../connection'

type DoctorAttributes = DoctorData & { id: number , active: boolean, readonly createdAt: Date , readonly updatedAt: Date }

type DoctorCreationAttributes = Optional<DoctorAttributes, "id">

const Doctor: ModelDefined<DoctorAttributes, DoctorCreationAttributes> = connection.define("Doctor", {
    
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    uf: {
        type: DataTypes.STRING(2),
        allowNull: false,
        validate: {
            len: [2, 2],
            notNull: true,
            notEmpty: true
        }
    },
    gia: {
        type: DataTypes.STRING(4),
        allowNull: false,
        validate: {
            len: [4, 4],
            notNull: true,
            notEmpty: true
        }
    },
    ddd: {
        type: DataTypes.STRING(2),
        allowNull: false,
        validate: {
            len: [2, 2],
            notNull: true,
            notEmpty: true
        }
    },
    crm: {
        type: DataTypes.STRING(9),
        allowNull: false,
        unique: true,
        validate: {
            len: [9, 9],
            notNull: true,
            notEmpty: true
        }
    },
    tel: {
        type: DataTypes.STRING(13),
        allowNull: false,
        validate: {
            len: [13, 13],
            notNull: true,
            notEmpty: true
        }
    },
    cel: {
        type: DataTypes.STRING(14),
        allowNull: false,
        validate: {
            len: [13, 14],
            notNull: true,
            notEmpty: true
        }
    },
    cep: {
        type: DataTypes.STRING(9),
        allowNull: false,
        validate: {
            len: [9, 9],
            notNull: true,
            notEmpty: true
        }
    },
    name: {
        type: DataTypes.STRING(120),
        allowNull: false,
        validate: {
            len: [3, 120],
            notNull: true,
            notEmpty: true
        }
    },
    ibge: {
        type: DataTypes.STRING(8),
        allowNull: false,
        validate: {
            len: [8, 8],
            notNull: true,
            notEmpty: true
        }
    },
    siafi: {
        type: DataTypes.STRING(4),
        allowNull: false,
        validate: {
            len: [4, 4],
            notNull: true,
            notEmpty: true
        }
    },
    bairro: {
        type: DataTypes.STRING(120),
        allowNull: false,
        validate: {
            len: [4, 120],
            notNull: true,
            notEmpty: true
        }
    },
    address: {
        type: DataTypes.STRING(5),
        allowNull: false,
        validate: {
            len: [1, 5],
            notNull: true,
            notEmpty: true
        }
    },
    specialty1:  {
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {
            len: [10, 64],
            notNull: true,
            notEmpty: true
        }
    },
    specialty2:  {
        type: DataTypes.STRING(64),
        allowNull: false,
        validate: {
            len: [10, 64],
            notNull: true,
            notEmpty: true
        }
    },
    logradouro: {
        type: DataTypes.STRING(120),
        allowNull: false,
        validate: {
            len: [8, 120],
            notNull: true,
            notEmpty: true
        }
    },
    localidade: {
        type: DataTypes.STRING(120),
        allowNull: false,
        validate: {
            len: [4, 120],
            notNull: true,
            notEmpty: true
        }
    },
    complemento: {
        type: DataTypes.STRING(64),
        allowNull: true
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }

}, { tableName: "DOCTORS", timestamps: true })

export default Doctor
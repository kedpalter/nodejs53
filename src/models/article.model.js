import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../common/sequelize/connect.sequelize.js";

// modelName: để dùng trong code
// tableName: tên thật để trong DB

export const Article = sequelize.define("Article", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.TEXT
    },
    imageUrl: {
        type: DataTypes.STRING
    },
    views: {
        type: DataTypes.INTEGER
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            key: "id",
            model: "Users" // phải dùng Table name là tên thật trong DB
        }
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW, //Sequelize.literal("CURRENT_TIMESTAMP")
    }
},
    {
        timestamps: false,
        tableName: "Articles"
    }
)

await Article.sync()

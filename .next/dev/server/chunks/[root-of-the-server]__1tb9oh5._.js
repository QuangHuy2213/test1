module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/node:url [external] (node:url, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}),
"[project]/src/app/api/districts/[cityCode]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "GET",
    ()=>GET,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const dynamic = "force-dynamic";
async function GET(request, context) {
    try {
        const { cityCode } = await context.params;
        const districts = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].districts.findMany({
            where: {
                parent_code: cityCode
            },
            orderBy: {
                name: "asc"
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(districts);
    } catch (error) {
        console.error("Lỗi lấy danh sách quận/huyện:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Không thể tải dữ liệu Quận/Huyện"
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/generated/client.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* !!! This is code generated by Prisma. Do not edit directly. !!! */ /* eslint-disable */ // biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * This file should be your main import to use Prisma. Through it you get access to all the models, enums, and input types.
 * If you're looking for something you can import in the client-side of your application, please refer to the `browser.ts` file instead.
 *
 * 🟢 You can import this file directly.
 */ __turbopack_context__.s([
    "PrismaClient",
    ()=>PrismaClient
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$internal$2f$class$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/internal/class.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$internal$2f$prismaNamespace$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/internal/prismaNamespace.ts [app-route] (ecmascript)");
var __TURBOPACK__import$2e$meta__ = {
    get url () {
        return __turbopack_context__.F("src/generated/client.ts");
    },
    env: {
        DEV: true,
        PROD: false,
        MODE: "development",
        BASE_URL: "/",
        SSR: true
    },
    get turbopackHot () {
        return __turbopack_context__.m.hot;
    }
};
;
;
globalThis['__dirname'] = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["dirname"]((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url));
;
;
;
;
const PrismaClient = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$internal$2f$class$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPrismaClientClass"]();
;
}),
"[project]/src/generated/internal/class.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPrismaClientClass",
    ()=>getPrismaClientClass
]);
/* !!! This is code generated by Prisma. Do not edit directly. !!! */ /* eslint-disable */ // biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * WARNING: This is an internal file that is subject to change!
 *
 * 🛑 Under no circumstances should you import this file directly! 🛑
 *
 * Please import the `PrismaClient` class from the `client.ts` file instead.
 */ var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client/runtime/client [external] (@prisma/client/runtime/client, cjs, [project]/node_modules/@prisma/client)");
;
const config = {
    "previewFeatures": [],
    "clientVersion": "7.9.1",
    "engineVersion": "e922089b7d7502aff4249d5da3420f6fa55fc6ad",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider = \"prisma-client\"\n  output   = \"../src/generated\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel cities {\n  code           String      @id @db.VarChar(10)\n  name           String      @db.VarChar(255)\n  slug           String?     @db.VarChar(255)\n  type           String?     @db.VarChar(50)\n  name_with_type String?     @db.VarChar(255)\n  districts      districts[]\n  posts          posts[]\n}\n\nmodel districts {\n  code           String  @id @db.VarChar(10)\n  name           String  @db.VarChar(255)\n  type           String? @db.VarChar(50)\n  slug           String? @db.VarChar(255)\n  name_with_type String? @db.VarChar(255)\n  path           String? @db.VarChar(255)\n  path_with_type String? @db.VarChar(255)\n  parent_code    String? @db.VarChar(10)\n  cities         cities? @relation(fields: [parent_code], references: [code], onDelete: NoAction, onUpdate: NoAction)\n  posts          posts[]\n}\n\nmodel posts {\n  id        Int        @id @default(autoincrement())\n  title     String     @db.VarChar(255)\n  thumbnail String?\n  price     Decimal    @db.Decimal\n  area      Decimal    @db.Decimal\n  city      String?    @db.VarChar(10)\n  district  String?    @db.VarChar(10)\n  content   String?\n  cities    cities?    @relation(fields: [city], references: [code], onDelete: NoAction, onUpdate: NoAction)\n  districts districts? @relation(fields: [district], references: [code], onDelete: NoAction, onUpdate: NoAction)\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"cities\":{\"fields\":[{\"name\":\"code\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name_with_type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"districts\",\"kind\":\"object\",\"type\":\"districts\",\"relationName\":\"citiesTodistricts\"},{\"name\":\"posts\",\"kind\":\"object\",\"type\":\"posts\",\"relationName\":\"citiesToposts\"}],\"dbName\":null},\"districts\":{\"fields\":[{\"name\":\"code\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name_with_type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"path\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"path_with_type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"parent_code\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"cities\",\"kind\":\"object\",\"type\":\"cities\",\"relationName\":\"citiesTodistricts\"},{\"name\":\"posts\",\"kind\":\"object\",\"type\":\"posts\",\"relationName\":\"districtsToposts\"}],\"dbName\":null},\"posts\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"thumbnail\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"area\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"city\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"district\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"content\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"cities\",\"kind\":\"object\",\"type\":\"cities\",\"relationName\":\"citiesToposts\"},{\"name\":\"districts\",\"kind\":\"object\",\"type\":\"districts\",\"relationName\":\"districtsToposts\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"orderBy\",\"cursor\",\"cities\",\"districts\",\"posts\",\"_count\",\"cities.findUnique\",\"cities.findUniqueOrThrow\",\"cities.findFirst\",\"cities.findFirstOrThrow\",\"cities.findMany\",\"data\",\"cities.createOne\",\"cities.createMany\",\"cities.createManyAndReturn\",\"cities.updateOne\",\"cities.updateMany\",\"cities.updateManyAndReturn\",\"create\",\"update\",\"cities.upsertOne\",\"cities.deleteOne\",\"cities.deleteMany\",\"having\",\"_min\",\"_max\",\"cities.groupBy\",\"cities.aggregate\",\"districts.findUnique\",\"districts.findUniqueOrThrow\",\"districts.findFirst\",\"districts.findFirstOrThrow\",\"districts.findMany\",\"districts.createOne\",\"districts.createMany\",\"districts.createManyAndReturn\",\"districts.updateOne\",\"districts.updateMany\",\"districts.updateManyAndReturn\",\"districts.upsertOne\",\"districts.deleteOne\",\"districts.deleteMany\",\"districts.groupBy\",\"districts.aggregate\",\"posts.findUnique\",\"posts.findUniqueOrThrow\",\"posts.findFirst\",\"posts.findFirstOrThrow\",\"posts.findMany\",\"posts.createOne\",\"posts.createMany\",\"posts.createManyAndReturn\",\"posts.updateOne\",\"posts.updateMany\",\"posts.updateManyAndReturn\",\"posts.upsertOne\",\"posts.deleteOne\",\"posts.deleteMany\",\"_avg\",\"_sum\",\"posts.groupBy\",\"posts.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"title\",\"thumbnail\",\"price\",\"area\",\"city\",\"district\",\"content\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"code\",\"name\",\"type\",\"slug\",\"name_with_type\",\"path\",\"path_with_type\",\"parent_code\",\"every\",\"some\",\"none\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "yQEdMAoEAAB0ACAFAAB1ACA_AABzADBAAAAHABBBAABzADBVAQAAAAFWAQBtACFXAQBuACFYAQBuACFZAQBuACEBAAAAAQAgDQMAAHAAIAUAAHUAID8AAHYAMEAAAAMAEEEAAHYAMFUBAG0AIVYBAG0AIVcBAG4AIVgBAG4AIVkBAG4AIVoBAG4AIVsBAG4AIVwBAG4AIQgDAAC2AQAgBQAAtQEAIFcAAHcAIFgAAHcAIFkAAHcAIFoAAHcAIFsAAHcAIFwAAHcAIA0DAABwACAFAAB1ACA_AAB2ADBAAAADABBBAAB2ADBVAQAAAAFWAQBtACFXAQBuACFYAQBuACFZAQBuACFaAQBuACFbAQBuACFcAQBuACEDAAAAAwAgAQAABAAwAgAABQAgCgQAAHQAIAUAAHUAID8AAHMAMEAAAAcAEEEAAHMAMFUBAG0AIVYBAG0AIVcBAG4AIVgBAG4AIVkBAG4AIQEAAAAHACANAwAAcAAgBAAAcQAgPwAAbAAwQAAACQAQQQAAbAAwQgIAcgAhQwEAbQAhRAEAbgAhRRAAbwAhRhAAbwAhRwEAbgAhSAEAbgAhSQEAbgAhBgMAALYBACAEAAC3AQAgRAAAdwAgRwAAdwAgSAAAdwAgSQAAdwAgDQMAAHAAIAQAAHEAID8AAGwAMEAAAAkAEEEAAGwAMEICAAAAAUMBAG0AIUQBAG4AIUUQAG8AIUYQAG8AIUcBAG4AIUgBAG4AIUkBAG4AIQMAAAAJACABAAAKADACAAALACABAAAABwAgAQAAAAMAIAEAAAAJACADAAAACQAgAQAACgAwAgAACwAgAQAAAAMAIAEAAAAJACABAAAAAQAgBQQAALQBACAFAAC1AQAgVwAAdwAgWAAAdwAgWQAAdwAgAwAAAAcAIAEAABQAMAIAAAEAIAMAAAAHACABAAAUADACAAABACADAAAABwAgAQAAFAAwAgAAAQAgBwQAALIBACAFAACzAQAgVQEAAAABVgEAAAABVwEAAAABWAEAAAABWQEAAAABAQwAABgAIAVVAQAAAAFWAQAAAAFXAQAAAAFYAQAAAAFZAQAAAAEBDAAAGgAwAQwAABoAMAcEAACbAQAgBQAAnAEAIFUBAH0AIVYBAH0AIVcBAH4AIVgBAH4AIVkBAH4AIQIAAAABACAMAAAdACAFVQEAfQAhVgEAfQAhVwEAfgAhWAEAfgAhWQEAfgAhAgAAAAcAIAwAAB8AIAIAAAAHACAMAAAfACADAAAAAQAgEwAAGAAgFAAAHQAgAQAAAAEAIAEAAAAHACAGBgAAmAEAIBkAAJoBACAaAACZAQAgVwAAdwAgWAAAdwAgWQAAdwAgCD8AAGsAMEAAACYAEEEAAGsAMFUBAF0AIVYBAF0AIVcBAF4AIVgBAF4AIVkBAF4AIQMAAAAHACABAAAlADAYAAAmACADAAAABwAgAQAAFAAwAgAAAQAgAQAAAAUAIAEAAAAFACADAAAAAwAgAQAABAAwAgAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAMAAAADACABAAAEADACAAAFACAKAwAAlgEAIAUAAJcBACBVAQAAAAFWAQAAAAFXAQAAAAFYAQAAAAFZAQAAAAFaAQAAAAFbAQAAAAFcAQAAAAEBDAAALgAgCFUBAAAAAVYBAAAAAVcBAAAAAVgBAAAAAVkBAAAAAVoBAAAAAVsBAAAAAVwBAAAAAQEMAAAwADABDAAAMAAwAQAAAAcAIAoDAACIAQAgBQAAiQEAIFUBAH0AIVYBAH0AIVcBAH4AIVgBAH4AIVkBAH4AIVoBAH4AIVsBAH4AIVwBAH4AIQIAAAAFACAMAAA0ACAIVQEAfQAhVgEAfQAhVwEAfgAhWAEAfgAhWQEAfgAhWgEAfgAhWwEAfgAhXAEAfgAhAgAAAAMAIAwAADYAIAIAAAADACAMAAA2ACABAAAABwAgAwAAAAUAIBMAAC4AIBQAADQAIAEAAAAFACABAAAAAwAgCQYAAIUBACAZAACHAQAgGgAAhgEAIFcAAHcAIFgAAHcAIFkAAHcAIFoAAHcAIFsAAHcAIFwAAHcAIAs_AABqADBAAAA-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_AABrADBAAAAmABBBAABrADBVAQBdACFWAQBdACFXAQBeACFYAQBeACFZAQBeACENAwAAcAAgBAAAcQAgPwAAbAAwQAAACQAQQQAAbAAwQgIAcgAhQwEAbQAhRAEAbgAhRRAAbwAhRhAAbwAhRwEAbgAhSAEAbgAhSQEAbgAhC0oBAAAAAUsBAAAABEwBAAAABE0BAAAAAU4BAAAAAU8BAAAAAVABAAAAAVEBAGcAIVIBAAAAAVMBAAAAAVQBAAAAAQtKAQAAAAFLAQAAAAVMAQAAAAVNAQAAAAFOAQAAAAFPAQAAAAFQAQAAAAFRAQBlACFSAQAAAAFTAQAAAAFUAQAAAAEIShAAAAABSxAAAAAETBAAAAAETRAAAAABThAAAAABTxAAAAABUBAAAAABURAAYgAhDAQAAHQAIAUAAHUAID8AAHMAMEAAAAcAEEEAAHMAMFUBAG0AIVYBAG0AIVcBAG4AIVgBAG4AIVkBAG4AIWAAAAcAIGEAAAcAIA8DAABwACAFAAB1ACA_AAB2ADBAAAADABBBAAB2ADBVAQBtACFWAQBtACFXAQBuACFYAQBuACFZAQBuACFaAQBuACFbAQBuACFcAQBuACFgAAADACBhAAADACAISgIAAAABSwIAAAAETAIAAAAETQIAAAABTgIAAAABTwIAAAABUAIAAAABUQIAYQAhCgQAAHQAIAUAAHUAID8AAHMAMEAAAAcAEEEAAHMAMFUBAG0AIVYBAG0AIVcBAG4AIVgBAG4AIVkBAG4AIQNdAAADACBeAAADACBfAAADACADXQAACQAgXgAACQAgXwAACQAgDQMAAHAAIAUAAHUAID8AAHYAMEAAAAMAEEEAAHYAMFUBAG0AIVYBAG0AIVcBAG4AIVgBAG4AIVkBAG4AIVoBAG4AIVsBAG4AIVwBAG4AIQAAAAAAAAFlAQAAAAEBZQEAAAABBWUQAAAAAWsQAAAAAWwQAAAAAW0QAAAAAW4QAAAAAQVlAgAAAAFrAgAAAAFsAgAAAAFtAgAAAAFuAgAAAAEHEwAAwgEAIBQAAMgBACBiAADDAQAgYwAAxwEAIGYAAAcAIGcAAAcAIGgAAAEAIAcTAADAAQAgFAAAxQEAIGIAAMEBACBjAADEAQAgZgAAAwAgZwAAAwAgaAAABQAgAxMAAMIBACBiAADDAQAgaAAAAQAgAxMAAMABACBiAADBAQAgaAAABQAgAAAABxMAALoBACAUAAC-AQAgYgAAuwEAIGMAAL0BACBmAAAHACBnAAAHACBoAAABACALEwAAigEAMBQAAI8BADBiAACLAQAwYwAAjAEAMGQAAI0BACBlAACOAQAwZgAAjgEAMGcAAI4BADBoAACOAQAwaQAAkAEAMGoAAJEBADAIAwAAgwEAIEICAAAAAUMBAAAAAUQBAAAAAUUQAAAAAUYQAAAAAUcBAAAAAUkBAAAAAQIAAAALACATAACVAQAgAwAAAAsAIBMAAJUBACAUAACUAQAgAQwAALwBADANAwAAcAAgBAAAcQAgPwAAbAAwQAAACQAQQQAAbAAwQgIAAAABQwEAbQAhRAEAbgAhRRAAbwAhRhAAbwAhRwEAbgAhSAEAbgAhSQEAbgAhAgAAAAsAIAwAAJQBACACAAAAkgEAIAwAAJMBACALPwAAkQEAMEAAAJIBABBBAACRAQAwQgIAcgAhQwEAbQAhRAEAbgAhRRAAbwAhRhAAbwAhRwEAbgAhSAEAbgAhSQEAbgAhCz8AAJEBADBAAACSAQAQQQAAkQEAMEICAHIAIUMBAG0AIUQBAG4AIUUQAG8AIUYQAG8AIUcBAG4AIUgBAG4AIUkBAG4AIQdCAgCAAQAhQwEAfQAhRAEAfgAhRRAAfwAhRhAAfwAhRwEAfgAhSQEAfgAhCAMAAIEBACBCAgCAAQAhQwEAfQAhRAEAfgAhRRAAfwAhRhAAfwAhRwEAfgAhSQEAfgAhCAMAAIMBACBCAgAAAAFDAQAAAAFEAQAAAAFFEAAAAAFGEAAAAAFHAQAAAAFJAQAAAAEDEwAAugEAIGIAALsBACBoAAABACAEEwAAigEAMGIAAIsBADBkAACNAQAgaAAAjgEAMAAAAAsTAACmAQAwFAAAqwEAMGIAAKcBADBjAACoAQAwZAAAqQEAIGUAAKoBADBmAACqAQAwZwAAqgEAMGgAAKoBADBpAACsAQAwagAArQEAMAsTAACdAQAwFAAAoQEAMGIAAJ4BADBjAACfAQAwZAAAoAEAIGUAAI4BADBmAACOAQAwZwAAjgEAMGgAAI4BADBpAACiAQAwagAAkQEAMAgEAACEAQAgQgIAAAABQwEAAAABRAEAAAABRRAAAAABRhAAAAABSAEAAAABSQEAAAABAgAAAAsAIBMAAKUBACADAAAACwAgEwAApQEAIBQAAKQBACABDAAAuQEAMAIAAAALACAMAACkAQAgAgAAAJIBACAMAACjAQAgB0ICAIABACFDAQB9ACFEAQB-ACFFEAB_ACFGEAB_ACFIAQB-ACFJAQB-ACEIBAAAggEAIEICAIABACFDAQB9ACFEAQB-ACFFEAB_ACFGEAB_ACFIAQB-ACFJAQB-ACEIBAAAhAEAIEICAAAAAUMBAAAAAUQBAAAAAUUQAAAAAUYQAAAAAUgBAAAAAUkBAAAAAQgFAACXAQAgVQEAAAABVgEAAAABVwEAAAABWAEAAAABWQEAAAABWgEAAAABWwEAAAABAgAAAAUAIBMAALEBACADAAAABQAgEwAAsQEAIBQAALABACABDAAAuAEAMA0DAABwACAFAAB1ACA_AAB2ADBAAAADABBBAAB2ADBVAQAAAAFWAQBtACFXAQBuACFYAQBuACFZAQBuACFaAQBuACFbAQBuACFcAQBuACECAAAABQAgDAAAsAEAIAIAAACuAQAgDAAArwEAIAs_AACtAQAwQAAArgEAEEEAAK0BADBVAQBtACFWAQBtACFXAQBuACFYAQBuACFZAQBuACFaAQBuACFbAQBuACFcAQBuACELPwAArQEAMEAAAK4BABBBAACtAQAwVQEAbQAhVgEAbQAhVwEAbgAhWAEAbgAhWQEAbgAhWgEAbgAhWwEAbgAhXAEAbgAhB1UBAH0AIVYBAH0AIVcBAH4AIVgBAH4AIVkBAH4AIVoBAH4AIVsBAH4AIQgFAACJAQAgVQEAfQAhVgEAfQAhVwEAfgAhWAEAfgAhWQEAfgAhWgEAfgAhWwEAfgAhCAUAAJcBACBVAQAAAAFWAQAAAAFXAQAAAAFYAQAAAAFZAQAAAAFaAQAAAAFbAQAAAAEEEwAApgEAMGIAAKcBADBkAACpAQAgaAAAqgEAMAQTAACdAQAwYgAAngEAMGQAAKABACBoAACOAQAwAAAFBAAAtAEAIAUAALUBACBXAAB3ACBYAAB3ACBZAAB3ACAIAwAAtgEAIAUAALUBACBXAAB3ACBYAAB3ACBZAAB3ACBaAAB3ACBbAAB3ACBcAAB3ACAHVQEAAAABVgEAAAABVwEAAAABWAEAAAABWQEAAAABWgEAAAABWwEAAAABB0ICAAAAAUMBAAAAAUQBAAAAAUUQAAAAAUYQAAAAAUgBAAAAAUkBAAAAAQYFAACzAQAgVQEAAAABVgEAAAABVwEAAAABWAEAAAABWQEAAAABAgAAAAEAIBMAALoBACAHQgIAAAABQwEAAAABRAEAAAABRRAAAAABRhAAAAABRwEAAAABSQEAAAABAwAAAAcAIBMAALoBACAUAAC_AQAgCAAAAAcAIAUAAJwBACAMAAC_AQAgVQEAfQAhVgEAfQAhVwEAfgAhWAEAfgAhWQEAfgAhBgUAAJwBACBVAQB9ACFWAQB9ACFXAQB-ACFYAQB-ACFZAQB-ACEJAwAAlgEAIFUBAAAAAVYBAAAAAVcBAAAAAVgBAAAAAVkBAAAAAVoBAAAAAVsBAAAAAVwBAAAAAQIAAAAFACATAADAAQAgBgQAALIBACBVAQAAAAFWAQAAAAFXAQAAAAFYAQAAAAFZAQAAAAECAAAAAQAgEwAAwgEAIAMAAAADACATAADAAQAgFAAAxgEAIAsAAAADACADAACIAQAgDAAAxgEAIFUBAH0AIVYBAH0AIVcBAH4AIVgBAH4AIVkBAH4AIVoBAH4AIVsBAH4AIVwBAH4AIQkDAACIAQAgVQEAfQAhVgEAfQAhVwEAfgAhWAEAfgAhWQEAfgAhWgEAfgAhWwEAfgAhXAEAfgAhAwAAAAcAIBMAAMIBACAUAADJAQAgCAAAAAcAIAQAAJsBACAMAADJAQAgVQEAfQAhVgEAfQAhVwEAfgAhWAEAfgAhWQEAfgAhBgQAAJsBACBVAQB9ACFWAQB9ACFXAQB-ACFYAQB-ACFZAQB-ACEDBAYCBRADBgAFAwMIAQUMAwYABAIDDQEEDgIBBQ8AAgQRAAUSAAAAAAMGAAoZAAsaAAwAAAADBgAKGQALGgAMAQMzAQEDOQEDBgARGQASGgATAAAAAwYAERkAEhoAEwIDSwEETAICA1IBBFMCBQYAGBkAGxoAHDsAGTwAGgAAAAAABQYAGBkAGxoAHDsAGTwAGgcCAQgTAQkVAQoWAQsXAQ0ZAQ4bBg8cBxAeAREgBhIhCBUiARYjARckBhsnCRwoDR0pAh4qAh8rAiAsAiEtAiIvAiMxBiQyDiU1AiY3Bic4Dyg6Aik7Aio8Bis_ECxAFC1BAy5CAy9DAzBEAzFFAzJHAzNJBjRKFTVOAzZQBjdRFjhUAzlVAzpWBj1ZFz5aHQ"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await __turbopack_context__.A("[externals]/node:buffer [external] (node:buffer, cjs, async loader)");
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async ()=>await __turbopack_context__.A("[externals]/@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs [external] (@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs, esm_import, [project]/node_modules/@prisma/client, async loader)"),
    getQueryCompilerWasmModule: async ()=>{
        const { wasm } = await __turbopack_context__.A("[externals]/@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs [external] (@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs, esm_import, [project]/node_modules/@prisma/client, async loader)");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["getPrismaClient"](config);
}
}),
"[project]/src/generated/internal/prismaNamespace.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnyNull",
    ()=>AnyNull,
    "CitiesScalarFieldEnum",
    ()=>CitiesScalarFieldEnum,
    "DbNull",
    ()=>DbNull,
    "Decimal",
    ()=>Decimal,
    "DistrictsScalarFieldEnum",
    ()=>DistrictsScalarFieldEnum,
    "JsonNull",
    ()=>JsonNull,
    "ModelName",
    ()=>ModelName,
    "NullTypes",
    ()=>NullTypes,
    "NullsOrder",
    ()=>NullsOrder,
    "PostsScalarFieldEnum",
    ()=>PostsScalarFieldEnum,
    "PrismaClientInitializationError",
    ()=>PrismaClientInitializationError,
    "PrismaClientKnownRequestError",
    ()=>PrismaClientKnownRequestError,
    "PrismaClientRustPanicError",
    ()=>PrismaClientRustPanicError,
    "PrismaClientUnknownRequestError",
    ()=>PrismaClientUnknownRequestError,
    "PrismaClientValidationError",
    ()=>PrismaClientValidationError,
    "QueryMode",
    ()=>QueryMode,
    "SortOrder",
    ()=>SortOrder,
    "Sql",
    ()=>Sql,
    "TransactionIsolationLevel",
    ()=>TransactionIsolationLevel,
    "defineExtension",
    ()=>defineExtension,
    "empty",
    ()=>empty,
    "getExtensionContext",
    ()=>getExtensionContext,
    "join",
    ()=>join,
    "prismaVersion",
    ()=>prismaVersion,
    "raw",
    ()=>raw,
    "sql",
    ()=>sql
]);
/* !!! This is code generated by Prisma. Do not edit directly. !!! */ /* eslint-disable */ // biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * WARNING: This is an internal file that is subject to change!
 *
 * 🛑 Under no circumstances should you import this file directly! 🛑
 *
 * All exports from this file are wrapped under a `Prisma` namespace object in the client.ts file.
 * While this enables partial backward compatibility, it is not part of the stable public API.
 *
 * If you are looking for your Models, Enums, and Input Types, please import them from the respective
 * model files in the `model` directory!
 */ var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client/runtime/client [external] (@prisma/client/runtime/client, cjs, [project]/node_modules/@prisma/client)");
;
const PrismaClientKnownRequestError = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClientKnownRequestError"];
const PrismaClientUnknownRequestError = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClientUnknownRequestError"];
const PrismaClientRustPanicError = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClientRustPanicError"];
const PrismaClientInitializationError = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClientInitializationError"];
const PrismaClientValidationError = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClientValidationError"];
const sql = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["sqltag"];
const empty = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["empty"];
const join = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["join"];
const raw = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["raw"];
const Sql = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["Sql"];
const Decimal = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["Decimal"];
const getExtensionContext = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["Extensions"].getExtensionContext;
const prismaVersion = {
    client: "7.9.1",
    engine: "e922089b7d7502aff4249d5da3420f6fa55fc6ad"
};
const NullTypes = {
    DbNull: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["NullTypes"].DbNull,
    JsonNull: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["NullTypes"].JsonNull,
    AnyNull: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["NullTypes"].AnyNull
};
const DbNull = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["DbNull"];
const JsonNull = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["JsonNull"];
const AnyNull = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["AnyNull"];
const ModelName = {
    cities: 'cities',
    districts: 'districts',
    posts: 'posts'
};
const TransactionIsolationLevel = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["makeStrictEnum"]({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
const CitiesScalarFieldEnum = {
    code: 'code',
    name: 'name',
    slug: 'slug',
    type: 'type',
    name_with_type: 'name_with_type'
};
const DistrictsScalarFieldEnum = {
    code: 'code',
    name: 'name',
    type: 'type',
    slug: 'slug',
    name_with_type: 'name_with_type',
    path: 'path',
    path_with_type: 'path_with_type',
    parent_code: 'parent_code'
};
const PostsScalarFieldEnum = {
    id: 'id',
    title: 'title',
    thumbnail: 'thumbnail',
    price: 'price',
    area: 'area',
    city: 'city',
    district: 'district',
    content: 'content'
};
const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
const NullsOrder = {
    first: 'first',
    last: 'last'
};
const defineExtension = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["Extensions"].defineExtension;
}),
"[project]/src/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/generated/client.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/adapter-pg/dist/index.mjs [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error("DATABASE_URL chưa được cấu hình");
}
const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PrismaPg"]({
    connectionString
});
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrismaClient"]({
    adapter
});
if ("TURBOPACK compile-time truthy", 1) {
    globalForPrisma.prisma = prisma;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1tb9oh5._.js.map
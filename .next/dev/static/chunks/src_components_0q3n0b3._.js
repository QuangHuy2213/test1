(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/CandlestickChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$apexcharts$2f$dist$2f$react$2d$apexcharts$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-apexcharts/dist/react-apexcharts.esm.js [app-client] (ecmascript)");
"use client";
;
var _this = ("TURBOPACK compile-time value", void 0);
;
;
// Khai báo Component dưới dạng React.FC (Function Component)
var CandlestickChart = function CandlestickChart() {
    // Dữ liệu mẫu (open, high, low, close)
    var seriesData = [
        {
            data: [
                {
                    x: new Date('2026-01-01').getTime(),
                    y: [
                        120,
                        135,
                        115,
                        130
                    ]
                },
                {
                    x: new Date('2026-01-02').getTime(),
                    y: [
                        130,
                        145,
                        125,
                        140
                    ]
                },
                {
                    x: new Date('2026-01-03').getTime(),
                    y: [
                        140,
                        150,
                        132,
                        135
                    ]
                },
                {
                    x: new Date('2026-01-04').getTime(),
                    y: [
                        135,
                        142,
                        120,
                        125
                    ]
                }
            ]
        }
    ];
    // Gắn kiểu ApexOptions để TypeScript tự động gợi ý code và kiểm tra lỗi
    var options = {
        chart: {
            type: 'candlestick',
            height: 400
        },
        title: {
            text: 'Candlestick Chart',
            align: 'left'
        },
        xaxis: {
            type: 'datetime',
            labels: {
                format: 'dd MMM yyyy'
            }
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: '#00B746',
                    downward: '#EF403C'
                }
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "chart-container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$apexcharts$2f$dist$2f$react$2d$apexcharts$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            options: options,
            series: seriesData,
            type: "candlestick",
            height: 400
        }, void 0, false, {
            fileName: "[project]/src/components/CandlestickChart.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, _this)
    }, void 0, false, {
        fileName: "[project]/src/components/CandlestickChart.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, _this);
};
_c = CandlestickChart;
const __TURBOPACK__default__export__ = CandlestickChart;
var _c;
__turbopack_context__.k.register(_c, "CandlestickChart");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PostList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
// 2. COMPONENT DISTRICT LABEL
var DistrictLabel = function DistrictLabel(param) {
    var cityCode = param.cityCode, districtCode = param.districtCode;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Mã ".concat(districtCode)), 2), districtName = _useState[0], setDistrictName = _useState[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DistrictLabel.useEffect": function() {
            if (!cityCode) return;
            fetch("/api/districts/".concat(cityCode)).then({
                "DistrictLabel.useEffect": function(res) {
                    return res.json();
                }
            }["DistrictLabel.useEffect"]).then({
                "DistrictLabel.useEffect": function(data) {
                    // Lớp bảo vệ chống lỗi .find()
                    var districts = [];
                    if (Array.isArray(data)) {
                        districts = data;
                    } else if (data && Array.isArray(data.data)) {
                        districts = data.data;
                    } else {
                        console.error("DistrictLabel - Dữ liệu không hợp lệ cho mã tỉnh ".concat(cityCode, ":"), data);
                    }
                    var found = districts.find({
                        "DistrictLabel.useEffect.found": function(d) {
                            return String(d.code) === String(districtCode);
                        }
                    }["DistrictLabel.useEffect.found"]);
                    if (found) setDistrictName(found.name_with_type);
                }
            }["DistrictLabel.useEffect"]).catch({
                "DistrictLabel.useEffect": function(err) {
                    return console.error("Lỗi fetch DistrictLabel:", err);
                }
            }["DistrictLabel.useEffect"]);
        }
    }["DistrictLabel.useEffect"], [
        cityCode,
        districtCode
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: districtName
    }, void 0, false, {
        fileName: "[project]/src/components/PostList.tsx",
        lineNumber: 60,
        columnNumber: 10
    }, _this);
};
_s(DistrictLabel, "j96hweI7XsmWl0nuna2QPMsm+eY=");
_c = DistrictLabel;
// 3. COMPONENT CHÍNH: POST LIST
var PostList = function PostList() {
    _s1();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), 2), cities = _useState[0], setCities = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), 2), availableDistricts = _useState1[0], setAvailableDistricts = _useState1[1];
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), 2), filteredPosts = _useState2[0], setFilteredPosts = _useState2[1];
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), selectedCity = _useState3[0], setSelectedCity = _useState3[1];
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), selectedDistrict = _useState4[0], setSelectedDistrict = _useState4[1];
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), selectedPrice = _useState5[0], setSelectedPrice = _useState5[1];
    var _useState6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(''), 2), selectedArea = _useState6[0], setSelectedArea = _useState6[1];
    // 4. Lấy danh sách thành phố khi vừa load trang
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PostList.useEffect": function() {
            fetch('/api/cities').then({
                "PostList.useEffect": function(res) {
                    return res.json();
                }
            }["PostList.useEffect"]).then({
                "PostList.useEffect": function(data) {
                    if (Array.isArray(data)) {
                        setCities(data);
                    } else if (data && Array.isArray(data.data)) {
                        setCities(data.data);
                    } else {
                        console.error("Cities - Dữ liệu không phải là mảng:", data);
                        setCities([]);
                    }
                }
            }["PostList.useEffect"]).catch({
                "PostList.useEffect": function(err) {
                    return console.error("Lỗi gọi API Cities:", err);
                }
            }["PostList.useEffect"]);
        }
    }["PostList.useEffect"], []);
    // 5. Gọi API lấy Quận/Huyện khi Tỉnh/Thành phố thay đổi
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PostList.useEffect": function() {
            if (selectedCity) {
                fetch("/api/districts/".concat(selectedCity)).then({
                    "PostList.useEffect": function(res) {
                        return res.json();
                    }
                }["PostList.useEffect"]).then({
                    "PostList.useEffect": function(data) {
                        if (Array.isArray(data)) {
                            setAvailableDistricts(data);
                        } else if (data && Array.isArray(data.data)) {
                            setAvailableDistricts(data.data);
                        } else {
                            console.error("Districts - Dữ liệu không phải là mảng:", data);
                            setAvailableDistricts([]);
                        }
                    }
                }["PostList.useEffect"]).catch({
                    "PostList.useEffect": function(err) {
                        return console.error("Lỗi gọi API Districts:", err);
                    }
                }["PostList.useEffect"]);
            } else {
                setAvailableDistricts([]);
            }
        }
    }["PostList.useEffect"], [
        selectedCity
    ]);
    // 6. Gọi API lấy TẤT CẢ bài viết ngay khi vừa load trang
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PostList.useEffect": function() {
            fetch('/api/posts').then({
                "PostList.useEffect": function(res) {
                    return res.json();
                }
            }["PostList.useEffect"]).then({
                "PostList.useEffect": function(data) {
                    if (Array.isArray(data)) {
                        setFilteredPosts(data);
                    } else if (data && Array.isArray(data.data)) {
                        setFilteredPosts(data.data);
                    } else {
                        console.error("Posts - Dữ liệu không phải là mảng:", data);
                        setFilteredPosts([]);
                    }
                }
            }["PostList.useEffect"]).catch({
                "PostList.useEffect": function(err) {
                    return console.error("Lỗi gọi API Posts:", err);
                }
            }["PostList.useEffect"]);
        }
    }["PostList.useEffect"], []);
    var handleCityChange = function handleCityChange(e) {
        setSelectedCity(e.target.value);
        setSelectedDistrict('');
    };
    // 7. Hàm gọi API lọc tin
    var handleFilter = function handleFilter() {
        var params = new URLSearchParams();
        if (selectedCity) params.append('city', selectedCity);
        if (selectedDistrict) params.append('district', selectedDistrict);
        if (selectedPrice) {
            var _selectedPrice_split = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(selectedPrice.split('-'), 2), min = _selectedPrice_split[0], max = _selectedPrice_split[1];
            params.append('min_price', min);
            if (max) params.append('max_price', max);
        }
        if (selectedArea) {
            var _selectedArea_split = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(selectedArea.split('-'), 2), min1 = _selectedArea_split[0], max1 = _selectedArea_split[1];
            params.append('min_area', min1);
            if (max1) params.append('max_area', max1);
        }
        fetch("/api/posts?".concat(params.toString())).then(function(res) {
            return res.json();
        }).then(function(data) {
            if (Array.isArray(data)) {
                setFilteredPosts(data);
            } else if (data && Array.isArray(data.data)) {
                setFilteredPosts(data.data);
            } else {
                console.error("Filter Posts - Dữ liệu không phải là mảng:", data);
                setFilteredPosts([]);
            }
        }).catch(function(err) {
            return console.error("Lỗi gọi API Filter Posts:", err);
        });
    };
    // 8. Hàm làm mới bộ lọc
    var handleReset = function handleReset() {
        setSelectedCity('');
        setSelectedDistrict('');
        setSelectedPrice('');
        setSelectedArea('');
        fetch('/api/posts').then(function(res) {
            return res.json();
        }).then(function(data) {
            if (Array.isArray(data)) {
                setFilteredPosts(data);
            } else if (data && Array.isArray(data.data)) {
                setFilteredPosts(data.data);
            } else {
                console.error("Reset Posts - Dữ liệu không phải là mảng:", data);
                setFilteredPosts([]);
            }
        }).catch(function(err) {
            return console.error("Lỗi gọi API Reset Posts:", err);
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "post-list-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "search-bar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Tỉnh thành"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PostList.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedCity,
                                onChange: handleCityChange,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "---Tỉnh thành---"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PostList.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, _this),
                                    cities.map(function(city) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: city.code,
                                            children: city.name
                                        }, city.code, false, {
                                            fileName: "[project]/src/components/PostList.tsx",
                                            lineNumber: 200,
                                            columnNumber: 15
                                        }, _this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PostList.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PostList.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Quận huyện"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PostList.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedDistrict,
                                onChange: function onChange(e) {
                                    return setSelectedDistrict(e.target.value);
                                },
                                disabled: !selectedCity,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "---Quận huyện---"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PostList.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, _this),
                                    availableDistricts.map(function(district) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: district.code,
                                            children: district.name
                                        }, district.code, false, {
                                            fileName: "[project]/src/components/PostList.tsx",
                                            lineNumber: 210,
                                            columnNumber: 15
                                        }, _this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PostList.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PostList.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Khoảng giá"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PostList.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedPrice,
                                onChange: function onChange(e) {
                                    return setSelectedPrice(e.target.value);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Chọn mức giá"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PostList.tsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "0-1000000",
                                        children: "Dưới 1 triệu"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PostList.tsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "1000000-3000000",
                                        children: "1 triệu - 3 triệu"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PostList.tsx",
                                        lineNumber: 220,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "3000000-5000000",
                                        children: "3 triệu - 5 triệu"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PostList.tsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "5000000-",
                                        children: "Trên 5 triệu"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PostList.tsx",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PostList.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PostList.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Diện tích"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PostList.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedArea,
                                onChange: function onChange(e) {
                                    return setSelectedArea(e.target.value);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Chọn diện tích"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PostList.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "0-20",
                                        children: "Dưới 20 m²"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PostList.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "20-30",
                                        children: "20 m² - 30 m²"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PostList.tsx",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "30-50",
                                        children: "30 m² - 50 m²"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PostList.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "50-",
                                        children: "Trên 50 m²"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PostList.tsx",
                                        lineNumber: 233,
                                        columnNumber: 13
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PostList.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PostList.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, _this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        style: {
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'flex-end'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-filter",
                                onClick: handleFilter,
                                children: "Lọc tin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PostList.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-reset",
                                onClick: handleReset,
                                style: {
                                    padding: '10px 15px',
                                    backgroundColor: '#ccc',
                                    color: '#333',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontWeight: 'bold'
                                },
                                children: "Làm mới"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PostList.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, _this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PostList.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, _this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PostList.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, _this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "post-list",
                children: filteredPosts.length > 0 ? filteredPosts.map(function(post, index) {
                    var cityObj = cities.find(function(c) {
                        return String(c.code) === String(post.city);
                    });
                    var cityName = cityObj ? cityObj.name_with_type : "Mã tỉnh ".concat(post.city);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "post-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: post.thumbnail,
                                alt: post.title,
                                className: "post-thumbnail"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PostList.tsx",
                                lineNumber: 266,
                                columnNumber: 17
                            }, _this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "post-info",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "post-title",
                                        children: post.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PostList.tsx",
                                        lineNumber: 268,
                                        columnNumber: 19
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "post-price",
                                        children: [
                                            post.price / 1000000,
                                            " triệu/tháng"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PostList.tsx",
                                        lineNumber: 269,
                                        columnNumber: 19
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "post-meta",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Diện tích:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PostList.tsx",
                                                lineNumber: 271,
                                                columnNumber: 21
                                            }, _this),
                                            " ",
                                            post.area,
                                            "m²    ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Khu vực:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PostList.tsx",
                                                lineNumber: 272,
                                                columnNumber: 21
                                            }, _this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DistrictLabel, {
                                                cityCode: post.city,
                                                districtCode: post.district
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PostList.tsx",
                                                lineNumber: 272,
                                                columnNumber: 47
                                            }, _this),
                                            ", ",
                                            cityName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PostList.tsx",
                                        lineNumber: 270,
                                        columnNumber: 19
                                    }, _this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "post-content",
                                        children: post.content
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PostList.tsx",
                                        lineNumber: 274,
                                        columnNumber: 19
                                    }, _this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PostList.tsx",
                                lineNumber: 267,
                                columnNumber: 17
                            }, _this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/PostList.tsx",
                        lineNumber: 265,
                        columnNumber: 15
                    }, _this);
                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        padding: '20px',
                        textAlign: 'center'
                    },
                    children: "Không tìm thấy bài viết nào."
                }, void 0, false, {
                    fileName: "[project]/src/components/PostList.tsx",
                    lineNumber: 280,
                    columnNumber: 11
                }, _this)
            }, void 0, false, {
                fileName: "[project]/src/components/PostList.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, _this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PostList.tsx",
        lineNumber: 192,
        columnNumber: 5
    }, _this);
};
_s1(PostList, "L/Z2TAP+GOyIicDZURv9SvIFdW8=");
_c1 = PostList;
const __TURBOPACK__default__export__ = PostList;
var _c, _c1;
__turbopack_context__.k.register(_c, "DistrictLabel");
__turbopack_context__.k.register(_c1, "PostList");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_0q3n0b3._.js.map
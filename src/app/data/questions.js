const questions = [
  // JavaScript
  {
    id: 1,
    question: "JavaScript là kiểu ngôn ngữ gì?",
    options: ["Biên dịch", "Thông dịch", "Thông dịch & Biên dịch", "Không xác định"],
    correctAnswer: 1, // Thông dịch
  },
  {
    id: 2,
    question: "Từ khóa nào dùng để khai báo biến có phạm vi block?",
    options: ["var", "let", "const", "cả b và c"],
    correctAnswer: 3, // cả b và c
  },
  {
    id: 3,
    question: "Kết quả của `typeof null` trong JavaScript là gì?",
    options: ["'null'", "'object'", "'undefined'", "'boolean'"],
    correctAnswer: 1, // 'object'
  },
  {
    id: 4,
    question: "Hàm nào dùng để chuyển string sang số nguyên?",
    options: ["Number()", "parseInt()", "toInteger()", "convert()"],
    correctAnswer: 1, // parseInt()
  },
  {
    id: 5,
    question: "Kết quả của `[] == ![]` trong JavaScript là gì?",
    options: ["true", "false", "undefined", "null"],
    correctAnswer: 0, // true
  },
  {
    id: 6,
    question: "Phương thức nào dùng để thêm phần tử vào cuối mảng?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctAnswer: 0, // push()
  },
  {
    id: 7,
    question: "Hàm `map()` trong JavaScript trả về gì?",
    options: ["Mảng mới", "Giá trị đầu tiên", "Mảng gốc", "Không trả về"],
    correctAnswer: 0, // Mảng mới
  },
  {
    id: 8,
    question: "Kết quả của `0.1 + 0.2` trong JavaScript là gì?",
    options: ["0.3", "0.30000000000000004", "0.4", "0.2"],
    correctAnswer: 1, // 0.30000000000000004
  },
  {
    id: 9,
    question: "Từ khóa `async` trong JavaScript dùng để làm gì?",
    options: ["Khai báo hàm bất đồng bộ", "Tạo vòng lặp", "Khai báo biến", "Xử lý lỗi"],
    correctAnswer: 0, // Khai báo hàm bất đồng bộ
  },
  {
    id: 10,
    question: "Phương thức nào kiểm tra mọi phần tử trong mảng thỏa điều kiện?",
    options: ["some()", "every()", "filter()", "find()"],
    correctAnswer: 1, // every()
  },

  // TypeScript
  {
    id: 11,
    question: "TypeScript là gì?",
    options: ["Một thư viện của JavaScript", "Một phiên bản của Java", "Một superset của JavaScript", "Một công cụ test"],
    correctAnswer: 2, // Một superset của JavaScript
  },
  {
    id: 12,
    question: "Từ khóa nào dùng để khai báo kiểu cho biến trong TypeScript?",
    options: ["type:", "as", ":", "typeof"],
    correctAnswer: 2, // :
  },
  {
    id: 13,
    question: "Kiểu dữ liệu nào sau đây không có trong TypeScript?",
    options: ["any", "tuple", "interface", "dynamic"],
    correctAnswer: 3, // dynamic
  },
  {
    id: 14,
    question: "Câu lệnh nào sẽ báo lỗi trong TypeScript?",
    options: [
      "let a: number = 5;",
      "let a: string = 10;",
      "let a: any = 'abc';",
      "let a: boolean = true;",
    ],
    correctAnswer: 1, // let a: string = 10;
  },
  {
    id: 15,
    question: "Cách khai báo interface trong TypeScript là?",
    options: ["interface Name {}", "type Name {}", "class Name {}", "struct Name {}"],
    correctAnswer: 0, // interface Name {}
  },
  {
    id: 16,
    question: "Kiểu `unknown` trong TypeScript khác `any` như thế nào?",
    options: ["Cần kiểm tra kiểu trước khi sử dụng", "Không thể gán giá trị", "Chỉ dùng cho hàm", "Giống nhau hoàn toàn"],
    correctAnswer: 0, // Cần kiểm tra kiểu trước khi sử dụng
  },
  {
    id: 17,
    question: "Từ khóa nào dùng để mở rộng interface trong TypeScript?",
    options: ["extends", "implements", "inherit", "super"],
    correctAnswer: 0, // extends
  },
  {
    id: 18,
    question: "Cách khai báo tuple trong TypeScript là gì?",
    options: ["[number, string]", "tuple(number, string)", "{number, string}", "array[number, string]"],
    correctAnswer: 0, // [number, string]
  },
  {
    id: 19,
    question: "TypeScript hỗ trợ kiểu nào cho các giá trị không thay đổi?",
    options: ["const", "readonly", "static", "final"],
    correctAnswer: 1, // readonly
  },
  {
    id: 20,
    question: "Câu lệnh nào dùng để ép kiểu trong TypeScript?",
    options: ["as", "cast", "convert", "type"],
    correctAnswer: 0, // as
  },

  // Tailwind CSS
  {
    id: 21,
    question: "Lớp Tailwind nào để tạo màu nền xanh dương?",
    options: ["bg-blue", "bg-blue-500", "background-blue", "blue-bg"],
    correctAnswer: 1, // bg-blue-500
  },
  {
    id: 22,
    question: "Lớp `p-4` trong Tailwind biểu thị điều gì?",
    options: ["padding: 1rem;", "padding: 4px;", "padding: 2rem;", "padding: 0.25rem;"],
    correctAnswer: 0, // padding: 1rem;
  },
  {
    id: 23,
    question: "Làm thế nào để tạo border tròn bằng Tailwind?",
    options: ["border-round", "rounded", "circle", "border-radius"],
    correctAnswer: 1, // rounded
  },
  {
    id: 24,
    question: "Tailwind hoạt động dựa trên nguyên tắc gì?",
    options: ["CSS truyền thống", "CSS module", "Utility-first CSS", "Inline style"],
    correctAnswer: 2, // Utility-first CSS
  },
  {
    id: 25,
    question: "Lớp nào dùng để căn giữa nội dung theo chiều ngang trong Tailwind?",
    options: ["mx-auto", "center", "justify-center", "align-center"],
    correctAnswer: 0, // mx-auto
  },
  {
    id: 26,
    question: "Lớp `text-2xl` trong Tailwind làm gì?",
    options: ["Cỡ chữ 2rem", "Cỡ chữ 1.5rem", "Căn giữa văn bản", "Chữ đậm"],
    correctAnswer: 0, // Cỡ chữ 2rem
  },
  {
    id: 27,
    question: "Cách thêm shadow vào phần tử bằng Tailwind là gì?",
    options: ["shadow", "box-shadow", "shadow-md", "border-shadow"],
    correctAnswer: 2, // shadow-md
  },
  {
    id: 28,
    question: "Lớp nào dùng để làm ẩn phần tử trong Tailwind?",
    options: ["hidden", "invisible", "display-none", "none"],
    correctAnswer: 0, // hidden
  },
  {
    id: 29,
    question: "Lớp `flex` trong Tailwind tương đương CSS nào?",
    options: ["display: block;", "display: flex;", "display: inline;", "display: grid;"],
    correctAnswer: 1, // display: flex;
  },
  {
    id: 30,
    question: "Cách tạo responsive trong Tailwind là gì?",
    options: ["Dùng media queries", "Thêm tiền tố như sm:, md:", "Dùng !important", "Sử dụng inline CSS"],
    correctAnswer: 1, // Thêm tiền tố như sm:, md:
  },

  // React Components
  {
    id: 31,
    question: "React component là gì?",
    options: [
      "Một hàm trả về HTML",
      "Một phần tử HTML",
      "Một file JavaScript",
      "Một class hoặc hàm trả về JSX",
    ],
    correctAnswer: 3, // Một class hoặc hàm trả về JSX
  },
  {
    id: 32,
    question: "Props trong React là gì?",
    options: [
      "Dữ liệu nội bộ",
      "Hàm xử lý sự kiện",
      "Dữ liệu truyền từ component cha sang con",
      "Biến toàn cục",
    ],
    correctAnswer: 2, // Dữ liệu truyền từ component cha sang con
  },
  {
    id: 33,
    question: "useState dùng để làm gì?",
    options: [
      "Quản lý route",
      "Lưu trạng thái của component",
      "Tạo component mới",
      "Render lại component",
    ],
    correctAnswer: 1, // Lưu trạng thái của component
  },
  {
    id: 34,
    question: "Cách đúng để truyền props vào component là?",
    options: [
      "<Component[prop]='value' />",
      "<Component prop='value' />",
      "<Component::prop='value' />",
      "<Component>{prop: value}</Component>",
    ],
    correctAnswer: 1, // <Component prop='value' />
  },
  {
    id: 35,
    question: "React Fragment dùng để làm gì?",
    options: [
      "Tạo animation",
      "Gói nhiều phần tử mà không tạo node DOM",
      "Quản lý state",
      "Gọi API",
    ],
    correctAnswer: 1, // Gói nhiều phần tử mà không tạo node DOM
  },
  {
    id: 36,
    question: "Cách khai báo defaultProps trong functional component?",
    options: [
      "Component.defaultProps = {}",
      "props.default = {}",
      "defaultProps(Component, {})",
      "Không hỗ trợ trong functional component",
    ],
    correctAnswer: 0, // Component.defaultProps = {}
  },

  // React Lifecycle / Hooks
  {
    id: 37,
    question: "Hàm nào được gọi một lần sau khi component được mount?",
    options: ["useEffect(() => {...})", "componentWillUnmount()", "useMemo()", "useRef()"],
    correctAnswer: 0, // useEffect(() => {...})
  },
  {
    id: 38,
    question: "React hook nào dùng để chạy một lần khi component load?",
    options: [
      "useEffect(() => {...}, [])",
      "useState()",
      "useCallback()",
      "useReducer()",
    ],
    correctAnswer: 0, // useEffect(() => {...}, [])
  },
  {
    id: 39,
    question: "React Lifecycle `componentWillUnmount` thường dùng để?",
    options: [
      "Tạo component",
      "Dọn dẹp tài nguyên như timer, subscription",
      "Cập nhật DOM",
      "Gán giá trị ban đầu",
    ],
    correctAnswer: 1, // Dọn dẹp tài nguyên như timer, subscription
  },
  {
    id: 40,
    question: "Hook `useRef()` thường dùng để làm gì?",
    options: [
      "Lưu trữ giá trị không gây render lại",
      "Tạo style động",
      "Gọi API",
      "Quản lý routing",
    ],
    correctAnswer: 0, // Lưu trữ giá trị không gây render lại
  },

  // TanStack Query
  {
    id: 41,
    question: "TanStack Query (React Query) chủ yếu dùng để làm gì?",
    options: [
      "Quản lý state cục bộ",
      "Quản lý dữ liệu bất đồng bộ và cache",
      "Tạo giao diện",
      "Xử lý routing",
    ],
    correctAnswer: 1, // Quản lý dữ liệu bất đồng bộ và cache
  },
  {
    id: 42,
    question: "Hook nào trong TanStack Query dùng để fetch dữ liệu?",
    options: ["useQuery()", "useFetch()", "useData()", "useApi()"],
    correctAnswer: 0, // useQuery()
  },
  {
    id: 43,
    question: "Cách invalidate cache trong TanStack Query là gì?",
    options: [
      "queryClient.invalidateQueries()",
      "useInvalidate()",
      "clearCache()",
      "refreshQuery()",
    ],
    correctAnswer: 0, // queryClient.invalidateQueries()
  },
  {
    id: 44,
    question: "Trạng thái `isLoading` trong useQuery nghĩa là gì?",
    options: [
      "Dữ liệu đã fetch thành công",
      "Đang fetch dữ liệu",
      "Lỗi khi fetch",
      "Dữ liệu không tồn tại",
    ],
    correctAnswer: 1, // Đang fetch dữ liệu
  },

  // Zustand
  {
    id: 45,
    question: "Zustand là gì?",
    options: [
      "Một thư viện quản lý state",
      "Một công cụ build",
      "Một thư viện UI",
      "Một framework backend",
    ],
    correctAnswer: 0, // Một thư viện quản lý state
  },
  {
    id: 46,
    question: "Cách tạo store trong Zustand là gì?",
    options: [
      "create(() => ({}))",
      "useStore({})",
      "makeStore({})",
      "defineStore({})",
    ],
    correctAnswer: 0, // create(() => ({}))
  },
  {
    id: 47,
    question: "Zustand lưu trữ state ở đâu?",
    options: ["Trong DOM", "Ngoài React component tree", "Trong localStorage", "Trong Redux"],
    correctAnswer: 1, // Ngoài React component tree
  },
  {
    id: 48,
    question: "Cách cập nhật state trong Zustand là gì?",
    options: [
      "set({})",
      "update({})",
      "changeState({})",
      "mutate({})",
    ],
    correctAnswer: 0, // set({})
  },
  {
    id: 49,
    question: "Zustand có hỗ trợ middleware không?",
    options: ["Có", "Không", "Chỉ trong phiên bản Pro", "Chỉ trong TypeScript"],
    correctAnswer: 0, // Có
  },
  {
    id: 50,
    question: "Hook nào dùng để truy cập state trong Zustand?",
    options: ["useStore()", "useZustand()", "useState()", "useSelector()"],
    correctAnswer: 0, // useStore()
  },
];

export default questions;
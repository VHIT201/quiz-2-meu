const questions = [
  // JavaScript trong React
  {
    id: 1,
    question: "JavaScript trong React chủ yếu được sử dụng để làm gì?",
    options: ["Tạo giao diện", "Quản lý logic và trạng thái", "Viết CSS", "Quản lý cơ sở dữ liệu"],
    correctAnswer: 1, // Quản lý logic và trạng thái
  },
  {
    id: 2,
    question: "Kết quả của `typeof useState` trong React là gì?",
    options: ["'function'", "'object'", "'undefined'", "'string'"],
    correctAnswer: 0, // 'function'
  },
  {
    id: 3,
    question: "Toán tử nào trong JavaScript thường dùng để kiểm tra props trong React?",
    options: ["==", "===", "!==", "!="],
    correctAnswer: 1, // ===
  },
  {
    id: 4,
    question: "Phương thức mảng nào thường được dùng để render danh sách trong React?",
    options: ["forEach()", "map()", "filter()", "reduce()"],
    correctAnswer: 1, // map()
  },
  {
    id: 5,
    question: "Kết quả của `[] == []` trong JavaScript là gì?",
    options: ["true", "false", "undefined", "null"],
    correctAnswer: 1, // false
  },
  {
    id: 6,
    question: "Cú pháp nào dùng để destructuring props trong functional component?",
    options: ["const { prop } = props", "const [prop] = props", "const prop = props{}", "const prop => props"],
    correctAnswer: 0, // const { prop } = props
  },
  {
    id: 7,
    question: "Hàm nào ngăn sự kiện lan truyền trong React?",
    options: ["stopPropagation()", "preventDefault()", "stopEvent()", "cancelEvent()"],
    correctAnswer: 0, // stopPropagation()
  },
  {
    id: 8,
    question: "Cách xử lý `setTimeout` trong React để tránh memory leak?",
    options: ["Không cần xử lý", "Dùng useEffect với cleanup", "Dùng trong render", "Dùng trong constructor"],
    correctAnswer: 1, // Dùng useEffect với cleanup
  },
  {
    id: 9,
    question: "Kết quả của `!![]` trong JavaScript là gì?",
    options: ["true", "false", "undefined", "null"],
    correctAnswer: 0, // true
  },
  {
    id: 10,
    question: "Phương thức nào kiểm tra giá trị là mảng trong React?",
    options: ["Array.isArray()", "isArray()", "typeof Array", "Array.check()"],
    correctAnswer: 0, // Array.isArray()
  },
  {
    id: 11,
    question: "Hàm `bind` trong React được dùng khi nào?",
    options: ["Gán state", "Gắn hàm xử lý sự kiện vào `this`", "Tạo component", "Quản lý props"],
    correctAnswer: 1, // Gắn hàm xử lý sự kiện vào `this`
  },
  {
    id: 12,
    question: "Cú pháp nào spread props trong React?",
    options: ["<Component ...props />", "<Component {props} />", "<Component props={...props} />", "<Component spread={props} />"],
    correctAnswer: 0, // <Component ...props />
  },
  {
    id: 13,
    question: "Kết quả của `'2' + 2` trong JavaScript là gì?",
    options: ["4", "'4'", "'22'", "22"],
    correctAnswer: 2, // '22'
  },
  {
    id: 14,
    question: "Hàm `slice()` trong JavaScript trả về gì khi dùng trong React?",
    options: ["Mảng mới", "Mảng gốc", "Chuỗi", "Giá trị đơn"],
    correctAnswer: 0, // Mảng mới
  },
  {
    id: 15,
    question: "Cách xử lý sự kiện click trong React sử dụng JavaScript?",
    options: ["onClick={handleClick}", "click={handleClick}", "onClick={handleClick()}", "addEventListener('click', handleClick)"],
    correctAnswer: 0, // onClick={handleClick}
  },
  {
    id: 16,
    question: "Hàm nào chuyển chuỗi JSON thành object trong React?",
    options: ["JSON.stringify()", "JSON.parse()", "toJSON()", "parseJSON()"],
    correctAnswer: 1, // JSON.parse()
  },
  {
    id: 17,
    question: "`Promise` trong React thường dùng để làm gì?",
    options: ["Xử lý sự kiện", "Gọi API bất đồng bộ", "Tạo component", "Quản lý state"],
    correctAnswer: 1, // Gọi API bất đồng bộ
  },
  {
    id: 18,
    question: "Kết quả của `typeof NaN` trong JavaScript là gì?",
    options: ["'number'", "'undefined'", "'object'", "'string'"],
    correctAnswer: 0, // 'number'
  },
  {
    id: 19,
    question: "Phương thức nào lọc danh sách trong React?",
    options: ["map()", "filter()", "reduce()", "forEach()"],
    correctAnswer: 1, // filter()
  },
  {
    id: 20,
    question: "Kết quả của `null == undefined` trong JavaScript là gì?",
    options: ["true", "false", "null", "undefined"],
    correctAnswer: 0, // true
  },

  // React
  {
    id: 21,
    question: "React là gì?",
    options: ["Framework backend", "Thư viện giao diện người dùng", "Công cụ build", "Ngôn ngữ lập trình"],
    correctAnswer: 1, // Thư viện giao diện người dùng
  },
  {
    id: 22,
    question: "JSX trong React là gì?",
    options: ["Cú pháp mở rộng JavaScript", "Thư viện CSS", "Hàm JavaScript", "Công cụ debug"],
    correctAnswer: 0, // Cú pháp mở rộng JavaScript
  },
  {
    id: 23,
    question: "React component phải trả về gì?",
    options: ["HTML", "JSX", "CSS", "JSON"],
    correctAnswer: 1, // JSX
  },
  {
    id: 24,
    question: "React tối ưu render bằng cơ chế nào?",
    options: ["Virtual DOM", "Real DOM", "Shadow DOM", "Direct DOM"],
    correctAnswer: 0, // Virtual DOM
  },
  {
    id: 25,
    question: "Cách tạo functional component trong React?",
    options: ["class Component {}", "function Component() {}", "const Component = () => {}", "component() {}"],
    correctAnswer: 2, // const Component = () => {}
  },
  {
    id: 26,
    question: "React.StrictMode dùng để làm gì?",
    options: ["Tối ưu hiệu suất", "Kiểm tra lỗi trong phát triển", "Quản lý state", "Tạo animation"],
    correctAnswer: 1, // Kiểm tra lỗi trong phát triển
  },
  {
    id: 27,
    question: "React key trong danh sách dùng để làm gì?",
    options: ["Tạo style", "Xác định phần tử duy nhất", "Quản lý state", "Xử lý sự kiện"],
    correctAnswer: 1, // Xác định phần tử duy nhất
  },
  {
    id: 28,
    question: "React Portal dùng để làm gì?",
    options: ["Render ngoài DOM chính", "Quản lý state", "Tạo component", "Gọi API"],
    correctAnswer: 0, // Render ngoài DOM chính
  },
  {
    id: 29,
    question: "Cách import React trong file JSX?",
    options: ["import React from 'react'", "require('react')", "import ReactDOM", "import * as React"],
    correctAnswer: 0, // import React from 'react'
  },
  {
    id: 30,
    question: "React.Fragment dùng để làm gì?",
    options: ["Tạo animation", "Gói nhiều phần tử không tạo node DOM", "Quản lý state", "Gọi API"],
    correctAnswer: 1, // Gói nhiều phần tử không tạo node DOM
  },
  {
    id: 31,
    question: "React.memo dùng để làm gì?",
    options: ["Tối ưu render component", "Quản lý state", "Tạo hooks", "Xử lý sự kiện"],
    correctAnswer: 0, // Tối ưu render component
  },
  {
    id: 32,
    question: "React Context dùng để làm gì?",
    options: ["Tạo component", "Chia sẻ dữ liệu giữa component", "Tạo style", "Quản lý route"],
    correctAnswer: 1, // Chia sẻ dữ liệu giữa component
  },
  {
    id: 33,
    question: "React version nào giới thiệu Hooks?",
    options: ["16.8", "16.0", "17.0", "18.0"],
    correctAnswer: 0, // 16.8
  },
  {
    id: 34,
    question: "Cách tạo ref trong functional component?",
    options: ["useRef()", "createRef()", "ref()", "useReference()"],
    correctAnswer: 0, // useRef()
  },
  {
    id: 35,
    question: "React component có thể trả về giá trị nào?",
    options: ["null", "undefined", "true", "Tất cả các giá trị trên"],
    correctAnswer: 3, // Tất cả các giá trị trên
  },
  {
    id: 36,
    question: "React Suspense dùng để làm gì?",
    options: ["Quản lý state", "Xử lý lazy loading component", "Tạo animation", "Quản lý route"],
    correctAnswer: 1, // Xử lý lazy loading component
  },
  {
    id: 37,
    question: "React.useCallback dùng để làm gì?",
    options: ["Tạo hàm memoized", "Quản lý state", "Tạo ref", "Gọi API"],
    correctAnswer: 0, // Tạo hàm memoized
  },
  {
    id: 38,
    question: "React.useMemo dùng để làm gì?",
    options: ["Tối ưu giá trị tính toán", "Quản lý state", "Tạo component", "Xử lý sự kiện"],
    correctAnswer: 0, // Tối ưu giá trị tính toán
  },
  {
    id: 39,
    question: "React.forwardRef dùng để làm gì?",
    options: ["Chuyển ref sang component con", "Tạo state", "Tạo style", "Tối ưu render"],
    correctAnswer: 0, // Chuyển ref sang component con
  },
  {
    id: 40,
    question: "React.createElement dùng để làm gì?",
    options: ["Tạo JSX", "Tạo DOM element", "Tạo component không dùng JSX", "Quản lý state"],
    correctAnswer: 2, // Tạo component không dùng JSX
  },

  // State và Props trong React
  {
    id: 41,
    question: "Props trong React là gì?",
    options: ["Dữ liệu nội bộ", "Dữ liệu truyền từ cha sang con", "Hàm xử lý sự kiện", "Biến toàn cục"],
    correctAnswer: 1, // Dữ liệu truyền từ cha sang con
  },
  {
    id: 42,
    question: "State trong React được quản lý ở đâu?",
    options: ["Trong props", "Trong component", "Trong DOM", "Trong Redux"],
    correctAnswer: 1, // Trong component
  },
  {
    id: 43,
    question: "Hook nào quản lý state trong functional component?",
    options: ["useState()", "useEffect()", "useRef()", "useContext()"],
    correctAnswer: 0, // useState()
  },
  {
    id: 44,
    question: "Cách cập nhật state trong React?",
    options: ["state = newValue", "setState(newValue)", "this.state = newValue", "useState(newValue)"],
    correctAnswer: 1, // setState(newValue)
  },
  {
    id: 45,
    question: "Props trong React có thể thay đổi không?",
    options: ["Có", "Không", "Chỉ trong class component", "Chỉ trong functional component"],
    correctAnswer: 1, // Không
  },
  {
    id: 46,
    question: "Cách truyền nhiều props vào component?",
    options: [
      "<Component prop1='value1' prop2='value2' />",
      "<Component props={prop1, prop2} />",
      "<Component prop1 prop2 />",
      "<Component {prop1, prop2} />"],
    correctAnswer: 0, // <Component prop1='value1' prop2='value2' />
  },
  {
    id: 47,
    question: "DefaultProps trong React dùng để làm gì?",
    options: ["Tạo state mặc định", "Cung cấp giá trị mặc định cho props", "Tạo component mặc định", "Quản lý sự kiện"],
    correctAnswer: 1, // Cung cấp giá trị mặc định cho props
  },
  {
    id: 48,
    question: "Cách cập nhật state dựa trên giá trị trước đó?",
    options: ["setState(prev => prev + 1)", "setState(state + 1)", "state = state + 1", "useState(state + 1)"],
    correctAnswer: 0, // setState(prev => prev + 1)
  },
  {
    id: 49,
    question: "Props.children trong React là gì?",
    options: ["Nội dung giữa thẻ mở và đóng", "Danh sách props", "State của component", "Hàm xử lý sự kiện"],
    correctAnswer: 0, // Nội dung giữa thẻ mở và đóng
  },
  {
    id: 50,
    question: "State trong React được cập nhật như thế nào?",
    options: ["Đồng bộ", "Bất đồng bộ", "Ngay lập tức", "Không bao giờ"],
    correctAnswer: 1, // Bất đồng bộ
  },

  // React Lifecycle (Class Components hoặc Effects)
  {
    id: 51,
    question: "Phương thức nào gọi ngay sau khi component mount trong class component?",
    options: ["componentDidMount", "componentWillMount", "render", "componentDidUpdate"],
    correctAnswer: 0, // componentDidMount
  },
  {
    id: 52,
    question: "Hook nào thay thế `componentDidMount` trong functional component?",
    options: ["useState", "useEffect(() => {}, [])", "useCallback", "useRef"],
    correctAnswer: 1, // useEffect(() => {}, [])
  },
  {
    id: 53,
    question: "Phương thức nào gọi trước khi component bị xóa trong class component?",
    options: ["componentWillUnmount", "componentDidUnmount", "componentWillMount", "componentDidUpdate"],
    correctAnswer: 0, // componentWillUnmount
  },
  {
    id: 54,
    question: "useEffect với dependency array rỗng chạy khi nào?",
    options: ["Mỗi lần render", "Chỉ khi mount", "Chỉ khi unmount", "Khi state thay đổi"],
    correctAnswer: 1, // Chỉ khi mount
  },
  {
    id: 55,
    question: "Phương thức nào gọi sau khi props hoặc state thay đổi trong class component?",
    options: ["componentDidMount", "componentDidUpdate", "componentWillUnmount", "render"],
    correctAnswer: 1, // componentDidUpdate
  },
  {
    id: 56,
    question: "Cách dọn dẹp trong useEffect?",
    options: ["Trả về hàm trong useEffect", "Dùng useCallback", "Dùng useRef", "Dùng componentWillUnmount"],
    correctAnswer: 0, // Trả về hàm trong useEffect
  },
  {
    id: 57,
    question: "`shouldComponentUpdate` dùng để làm gì?",
    options: ["Quản lý state", "Kiểm soát re-render", "Tạo component", "Gọi API"],
    correctAnswer: 1, // Kiểm soát re-render
  },
  {
    id: 58,
    question: "useEffect chạy sau giai đoạn nào của React?",
    options: ["Mount", "Render", "Update", "Tất cả các giai đoạn trên"],
    correctAnswer: 3, // Tất cả các giai đoạn trên
  },
  {
    id: 59,
    question: "Phương thức nào gọi trước render trong class component?",
    options: ["componentDidMount", "getDerivedStateFromProps", "componentWillUnmount", "componentDidUpdate"],
    correctAnswer: 1, // getDerivedStateFromProps
  },
  {
    id: 60,
    question: "useEffect thay thế phương thức nào trong class component?",
    options: ["componentDidMount", "componentDidUpdate", "componentWillUnmount", "Tất cả các phương thức trên"],
    correctAnswer: 3, // Tất cả các phương thức trên
  },

  // Styling trong React (CSS thường)
  {
    id: 61,
    question: "Cách thêm inline style trong React?",
    options: ["style={{}}", "className={}", "css={}", "style=[]"],
    correctAnswer: 0, // style={{}}
  },
  {
    id: 62,
    question: "CSS Modules trong React hoạt động như thế nào?",
    options: ["Thêm toàn bộ CSS", "Tạo tên class duy nhất", "Tạo inline style", "Tạo global style"],
    correctAnswer: 1, // Tạo tên class duy nhất
  },
  {
    id: 63,
    question: "Cách import CSS Module trong React?",
    options: ["import styles from './style.module.css'", "import './style.css'", "require('./style.css')", "import css from './style.css'"],
    correctAnswer: 0, // import styles from './style.module.css'
  },
  {
    id: 64,
    question: "Styled-components trong React là gì?",
    options: ["Thư viện tạo style động", "Công cụ tạo CSS tĩnh", "Thư viện quản lý state", "Công cụ tạo component"],
    correctAnswer: 0, // Thư viện tạo style động
  },
  {
    id: 65,
    question: "Cách thêm class động trong React?",
    options: ["className={condition ? 'class1' : 'class2'}", "class={condition ? 'class1' : 'class2'}", "style={condition ? 'class1' : 'class2'}", "className={{condition: 'class1'}}"],
    correctAnswer: 0, // className={condition ? 'class1' : 'class2'}
  },
  {
    id: 66,
    question: "Cách sử dụng styled-components trong React?",
    options: ["const StyledDiv = styled.div``", "const StyledDiv = style.div()", "const StyledDiv = css.div``", "const StyledDiv = styled('div')"],
    correctAnswer: 0, // const StyledDiv = styled.div``
  },
  {
    id: 67,
    question: "Cách thêm global CSS trong React?",
    options: ["Import CSS vào index.js", "Dùng styled-components", "Dùng inline style", "Dùng CSS Module"],
    correctAnswer: 0, // Import CSS vào index.js
  },
  {
    id: 68,
    question: "Cách sử dụng inline style với object trong React?",
    options: ["style={{ color: 'red' }}", "style={color: 'red'}", "style='color: red'", "style={{ 'color': red }}"],
    correctAnswer: 0, // style={{ color: 'red' }}
  },
  {
    id: 69,
    question: "CSS Module thêm hậu tố vào class để làm gì?",
    options: ["Tăng bảo mật", "Tránh xung đột tên class", "Tăng hiệu suất", "Tạo style động"],
    correctAnswer: 1, // Tránh xung đột tên class
  },
  {
    id: 70,
    question: "Cách sử dụng biến trong styled-components?",
    options: ["props => ({ color: props.color })", "style={props.color}", "color: ${props.color}", "props.color"],
    correctAnswer: 0, // props => ({ color: props.color })
  },
  {
    id: 71,
    question: "Cách thêm style động dựa trên state trong React?",
    options: ["style={{ color: state.color }}", "className={state.color}", "style={state.color}", "css={{ color: state.color }}"],
    correctAnswer: 0, // style={{ color: state.color }}
  },
  {
    id: 72,
    question: "Cách tạo style có điều kiện trong React với CSS Modules?",
    options: ["className={styles[condition ? 'class1' : 'class2']}", "style={condition ? 'class1' : 'class2'}", "css={condition ? 'class1' : 'class2'}", "className={{ condition: styles.class1 }}"],
    correctAnswer: 0, // className={styles[condition ? 'class1' : 'class2']}
  },
  {
    id: 73,
    question: "Cách sử dụng pseudo-class như `:hover` trong styled-components?",
    options: ["&:hover { color: red; }", "hover: { color: red; }", ":hover { color: red; }", "hover { color: red; }"],
    correctAnswer: 0, // &:hover { color: red; }
  },
  {
    id: 74,
    question: "Cách thêm style cho component con trong styled-components?",
    options: ["& div { color: red; }", "div: { color: red; }", "child: { color: red; }", "div { color: red; }"],
    correctAnswer: 0, // & div { color: red; }
  },
  {
    id: 75,
    question: "Cách áp dụng media query trong styled-components?",
    options: ["@media (min-width: 768px) { color: red; }", "media: { color: red; }", "@media: { color: red; }", "responsive: { color: red; }"],
    correctAnswer: 0, // @media (min-width: 768px) { color: red; }
  },
  {
    id: 76,
    question: "Cách sử dụng CSS thường trong file riêng với React?",
    options: ["Import file CSS", "Dùng inline style", "Dùng CSS Module", "Dùng styled-components"],
    correctAnswer: 0, // Import file CSS
  },
  {
    id: 77,
    question: "Cách kết hợp nhiều class trong React với CSS Modules?",
    options: ["className={`${styles.class1} ${styles.class2}`}", "className={[styles.class1, styles.class2]}", "className={{ class1, class2 }}", "className={styles.class1 + styles.class2}"],
    correctAnswer: 0, // className={`${styles.class1} ${styles.class2}`}
  },
  {
    id: 78,
    question: "Cách thêm style cho toàn bộ ứng dụng React với CSS thường?",
    options: ["Import CSS vào index.js", "Dùng inline style", "Dùng CSS Module", "Dùng styled-components"],
    correctAnswer: 0, // Import CSS vào index.js
  },
  {
    id: 79,
    question: "Cách sử dụng inline style với giá trị động trong React?",
    options: ["style={{ width: `${value}px` }}", "style={width: value}px", "style='width: value'", "style={{ width: value px }}"],
    correctAnswer: 0, // style={{ width: `${value}px` }}
  },
  {
    id: 80,
    question: "Cách áp dụng style cho một thẻ cụ thể trong CSS Module?",
    options: ["styles.tagName", "style.tagName", "css.tagName", "tagName.style"],
    correctAnswer: 0, // styles.tagName
  },
  {
    id: 81,
    question: "Cách tạo style responsive với CSS thường trong React?",
    options: ["Dùng media queries trong file CSS", "Dùng inline style", "Dùng CSS Module với media", "Dùng styled-components"],
    correctAnswer: 0, // Dùng media queries trong file CSS
  },
  {
    id: 82,
    question: "Cách sử dụng keyframes trong styled-components?",
    options: ["const animation = keyframes``", "const animation = animation``", "const animation = css.keyframes``", "const animation = styled.keyframes``"],
    correctAnswer: 0, // const animation = keyframes``
  },
  {
    id: 83,
    question: "Cách thêm style cho một class trong file CSS thường trong React?",
    options: [".className { color: red; }", "className: { color: red; }", "className { color: red }", ".className: { color: red; }"],
    correctAnswer: 0, // .className { color: red; }
  },
  {
    id: 84,
    question: "Cách sử dụng style động với props trong styled-components?",
    options: ["color: ${props => props.color};", "color: props.color;", "color: {props.color};", "color: props => props.color;"],
    correctAnswer: 0, // color: ${props => props.color};
  },
  {
    id: 85,
    question: "Cách thêm style cho một ID trong file CSS thường trong React?",
    options: ["#idName { color: red; }", "idName: { color: red; }", "#idName: { color: red; }", "idName { color: red; }"],
    correctAnswer: 0, // #idName { color: red; }
  },
  {
    id: 86,
    question: "Cách sử dụng CSS Module với nhiều class trong một thẻ?",
    options: ["className={`${styles.class1} ${styles.class2}`}", "className={[styles.class1, styles.class2]}", "className={styles.class1 + styles.class2}", "className={{ class1, class2 }}"],
    correctAnswer: 0, // className={`${styles.class1} ${styles.class2}`}
  },
  {
    id: 87,
    question: "Cách áp dụng style cho thẻ con trong CSS Module?",
    options: [".parent .child { color: red; }", "parent:child { color: red; }", ".parent:child { color: red; }", "child { color: red; }"],
    correctAnswer: 0, // .parent .child { color: red; }
  },
  {
    id: 88,
    question: "Cách thêm animation với CSS thường trong React?",
    options: ["Dùng @keyframes trong file CSS", "Dùng inline style", "Dùng CSS Module", "Dùng styled-components"],
    correctAnswer: 0, // Dùng @keyframes trong file CSS
  },
  {
    id: 89,
    question: "Cách sử dụng inline style với nhiều thuộc tính trong React?",
    options: ["style={{ color: 'red', fontSize: '16px' }}", "style={color: 'red', fontSize: '16px'}", "style='color: red; fontSize: 16px'", "style={{ color: red, fontSize: 16px }}"],
    correctAnswer: 0, // style={{ color: 'red', fontSize: '16px' }}
  },
  {
    id: 90,
    question: "Cách áp dụng style cho pseudo-element trong styled-components?",
    options: ["&::before { content: ''; }", "before: { content: ''; }", "::before { content: ''; }", "before { content: ''; }"],
    correctAnswer: 0, // &::before { content: ''; }
  },

  {
    id: 91,
    question: "Cách sử dụng global styles với styled-components?",
    options: ["createGlobalStyle``", "globalStyle``", "css.global``", "styled.global``"],
    correctAnswer: 0, // createGlobalStyle``
  },
  {
    id: 92,
    question: "Cách thêm style cho một thẻ HTML cụ thể trong CSS Module?",
    options: ["styles.tagName", "style.tagName", "css.tagName", "tagName.style"],
    correctAnswer: 0, // styles.tagName
  },
  {
    id: 93,
    question: "Cách sử dụng CSS thường để tạo flexbox trong React?",
    options: ["display: flex;", "display: block;", "display: inline;", "display: grid;"],
    correctAnswer: 0, // display: flex;
  },
  {
    id: 94,
    question: "Cách thêm style động dựa trên props trong CSS Module?",
    options: ["className={styles[props.condition ? 'class1' : 'class2']}", "style={props.condition ? 'class1' : 'class2'}", "css={props.condition ? 'class1' : 'class2'}", "className={{ props.condition: styles.class1 }}"],
    correctAnswer: 0, // className={styles[props.condition ? 'class1' : 'class2']}
  },
  {
    id: 95,
    question: "Cách sử dụng inline style với camelCase trong React?",
    options: ["style={{ backgroundColor: 'red' }}", "style={{ background-color: 'red' }}", "style='backgroundColor: red'", "style={{ backgroundColor: red }}"],
    correctAnswer: 0, // style={{ backgroundColor: 'red' }}
  },
  {
    id: 96,
    question: "Cách thêm style cho một thẻ con trong file CSS thường?",
    options: [".parent .child { color: red; }", "parent:child { color: red; }", ".parent:child { color: red; }", "child { color: red; }"],
    correctAnswer: 0, // .parent .child { color: red; }
  },
  {
    id: 97,
    question: "Cách sử dụng CSS thường để tạo grid trong React?",
    options: ["display: grid;", "display: flex;", "display: block;", "display: inline;"],
    correctAnswer: 0, // display: grid;
  },
  {
    id: 98,
    question: "Cách thêm style cho một pseudo-class trong CSS Module?",
    options: [".className:hover { color: red; }", "className:hover { color: red; }", ".className::hover { color: red; }", ":hover { color: red; }"],
    correctAnswer: 0, // .className:hover { color: red; }
  },
  {
    id: 99,
    question: "Cách sử dụng styled-components với nested styles?",
    options: ["& div { color: red; }", "div: { color: red; }", "child: { color: red; }", "div { color: red; }"],
    correctAnswer: 0, // & div { color: red; }
  },
  {
    id: 100,
    question: "Cách thêm style cho một thẻ với ID trong CSS Module?",
    options: ["styles.#idName", "styles.idName", "style.#idName", "css.#idName"],
    correctAnswer: 1, // styles.idName
  },
];

export default questions;

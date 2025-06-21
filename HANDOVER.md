# Project Showcase HTML 更新任務

## 任務說明

將 `project-overview.md` 的內容轉換為 HTML，取代 `index.html` 中現有的內容。

## 重要：工作方式

**不要一次性重寫整個檔案！**

正確的工作流程：
1. 先思考第一個 section 要如何轉換
2. 使用 Edit 工具更新第一個 section
3. 暫停，思考下一個 section
4. 使用 Edit 工具更新下一個 section
5. 重複直到完成

## 具體步驟

### 1. 保留的部分
- `<nav>` 導航列
- `<footer>` 頁尾
- 基本的 HTML 結構

### 2. 需要替換的部分
將 `<main class="container">` 內的所有內容替換為 `project-overview.md` 的三個部分：
- 第一部分：專案說明
- 第二部分：核心功能  
- 第三部分：技術實現

### 3. Markdown 轉 HTML 對應關係

**標題**
- `# ` → `<h1>`
- `## ` → `<h2>`
- `### ` → `<h3>`

**列表**
- `- ` → `<ul><li>`
- `**粗體**` → `<strong>粗體</strong>`

**程式碼**
- ` ```html ` → `<div class="code-block"><pre><code>`
- ` ``` ` → `</code></pre></div>`
- 行內 `` ` `` → `<code>`

**視覺元素標註**
- `[視覺元素說明：...]` → 
```html
<div class="visual-placeholder">
    <p>截圖待補充：...</p>
</div>
```

### 4. 特殊處理

**系統架構圖（ASCII）**
```html
<div class="architecture-diagram">
    <pre>
    <!-- ASCII 內容 -->
    </pre>
</div>
```

**分隔線**
- `---` → 移除（不需要）

### 5. CSS 類別對應

使用現有的 CSS 類別：
- 主要區塊：`<section>`
- 功能列表：現有的列表樣式即可
- 程式碼區塊：`code-block` 類別已存在

### 6. 檔案位置

- 內容來源：`/project-showcase/project-overview.md`
- 更新目標：`/project-showcase/index.html`
- CSS 檔案：`/project-showcase/css/styles.css`（不需要大改）

## 注意事項

1. 保持 HTML 結構清晰
2. 確保所有 Markdown 格式都正確轉換
3. 程式碼區塊要保持格式（特別是 ASCII 架構圖）
4. 分段處理，不要試圖一次完成所有內容
# 專案展示網站 UI 風格更新任務

## 任務概述

將參考資料夾 `" reference of new style of html and css/"` 中的視覺風格套用到現有的 AI 客服系統專案展示網站，同時保留原有的內容結構。

## 🎯 核心目標

1. **保留內容**：維持 AI 客服系統的所有專案說明內容
2. **更新風格**：採用參考檔案的學術風格設計
3. **漸進式更新**：使用 Edit 工具逐步修改，避免一次性重寫

## 📁 檔案位置

- **參考風格來源**：`/ reference of new style of html and css/`
  - `index.html` - 學術報告風格的 HTML 結構
  - `styles.css` - 專業的 CSS 樣式
- **更新目標**：
  - `index.html` - 現有的專案展示頁面
  - `css/styles.css` - 現有的樣式檔案

## 🎨 風格對照表

### 字體系統
| 現有風格 | 新風格 | 說明 |
|---------|--------|------|
| Inter (sans-serif) | Times New Roman, SimSun (serif) | 更學術、正式 |
| 現代科技感 | 傳統學術風 | 適合專案報告展示 |

### 色彩系統
| 元素 | 現有顏色 | 新顏色 | 用途 |
|------|---------|--------|------|
| 主色調 | #007AFF | #3498db | 標題邊框、連結 |
| 標題色 | #1D1D1F | #2c3e50 | h1, h2 標題 |
| 次標題 | #6E6E73 | #4a5568 | h3 標題 |
| 背景色 | #FFFFFF | #fafafa | 頁面背景 |
| 卡片背景 | #F5F5F7 | #ffffff | 內容區塊 |

### 版面配置
| 區塊 | 現有設計 | 新設計 |
|------|---------|--------|
| Header | 簡潔導航列 | 漸層背景 + 專案資訊 |
| TOC | 灰色背景側邊欄 | 白色卡片式側邊欄 |
| 內容區 | 直接顯示 | 白色卡片包覆 + 陰影 |
| 段落 | 無縮排 | 2em 首行縮排 |

## 📝 更新步驟（重要：逐步進行）

### 第一階段：更新 CSS 基礎樣式

1. **思考**：哪些基礎樣式需要更新？
   - 字體系統
   - 色彩變數
   - 基本排版

2. **使用 Edit 工具更新 CSS 變數**
   ```css
   /* 現有的 */
   --primary-color: #007AFF;
   
   /* 更新為 */
   --primary-color: #3498db;
   ```

3. **更新字體堆疊**
   - 保留中文字體支援
   - 加入 Times New Roman

### 第二階段：更新 Header 結構

1. **思考**：如何整合專案資訊到 header？
   - 保留「AI 客服系統專案」標題
   - 加入專案類型說明
   - 可能加入開發者資訊

2. **逐步修改 HTML 結構**
   - 先更新 header 標籤
   - 再加入內部結構
   - 最後調整內容

3. **對應的 CSS 更新**
   - 漸層背景
   - 文字陰影
   - 響應式調整

### 第三階段：優化 TOC 側邊欄

1. **思考**：如何讓 TOC 更專業？
   - 白色背景卡片
   - 優雅的 hover 效果
   - 更好的間距

2. **CSS 調整重點**
   - border-radius: 8px
   - box-shadow 效果
   - 連結 hover 動畫

### 第四階段：內容區域美化

1. **思考**：如何讓內容更易讀？
   - 段落首行縮排
   - 標題層級視覺化
   - 程式碼區塊優化

2. **標題樣式更新**
   ```css
   /* h2 加入左邊框 */
   border-left: 4px solid #3498db;
   
   /* h3 使用不同顏色 */
   border-left: 3px solid #e74c3c;
   ```

3. **段落格式**
   - text-align: justify
   - text-indent: 2em
   - 適當的 line-height

### 第五階段：特殊元素處理

1. **ASCII 架構圖**
   - 保持 monospace 字體
   - 加入適當背景
   - 確保對齊正確

2. **視覺預留位置**
   - 參考新風格的 border 樣式
   - 統一的提示文字格式

3. **程式碼區塊**
   - 保持深色背景
   - 調整 padding 和 margin

## ⚠️ 注意事項

### 必須保留的元素
1. **所有 AI 客服系統的內容文字**
2. **三個主要部分的結構**：
   - 第一部分：專案說明
   - 第二部分：核心功能
   - 第三部分：技術實現
3. **功能性 JavaScript**（平滑滾動、TOC 高亮）

### 工作方式提醒
1. **不要使用 Write 工具重寫整個檔案**
2. **每次只用 Edit 工具修改一小部分**
3. **修改前先思考該部分的目的**
4. **完成一個部分後暫停，評估效果**
5. **頻繁在瀏覽器中檢查結果**

### 風格轉換要點
- **專業感**：從科技風轉向學術風
- **可讀性**：確保中文顯示正常
- **一致性**：所有元素風格統一
- **響應式**：保持手機版可用性

## 🔍 檢查清單

完成更新後，確認以下項目：

- [ ] 字體系統正確套用（Times New Roman + 中文字體）
- [ ] 色彩系統統一更新
- [ ] Header 有漸層背景和專案資訊
- [ ] TOC 變成白色卡片樣式
- [ ] 內容區有適當的卡片包覆
- [ ] 段落有首行縮排
- [ ] 標題有視覺層級區分
- [ ] ASCII 架構圖顯示正常
- [ ] 響應式設計正常運作
- [ ] JavaScript 功能正常

## 💡 實作提示

1. **從 CSS 開始**：先更新樣式，再調整 HTML 結構
2. **保留原始檔案**：可以隨時參考或回滾
3. **測試優先**：每個改動後都在瀏覽器確認
4. **漸進增強**：先讓基本樣式工作，再加入細節

記住：這是一個**風格更新**任務，不是內容重寫。保持耐心，逐步完成！
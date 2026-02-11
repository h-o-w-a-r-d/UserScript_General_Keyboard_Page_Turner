// ==UserScript==
// @name         通用鍵盤翻頁腳本 (左/右鍵)
// @name:en      General Keyboard Page Turner (Left/Right Keys)
// @version      1.0
// @description  使用鍵盤左右鍵翻頁，支持多種語言的匹配文字與屬性
// @description:en Turn pages using left and right arrow keys, supporting multiple languages and element attributes.
// @author       Howard Zhen
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // --- 關鍵字清單 (親親，這裡涵蓋了超多變種唷！✨) ---
    const PREV_KEYWORDS = [
        '上一頁', '上壹頁', '上一页', '上页', '前一頁', '前一页', '前頁', '前页',
        'Previous', 'Prev', 'Back', 'Older', '< Prev', '«', '‹', '←', '上一章'
    ];

    const NEXT_KEYWORDS = [
        '下一頁', '下壹頁', '下一页', '下页', '後一頁', '後一页', '後頁', '后页',
        'Next', 'Forward', 'Newer', 'Next >', '»', '›', '→', '下一章'
    ];

    /**
     * 尋找符合條件的按鈕或連結
     * @param {string[]} keywords 
     * @returns {HTMLElement|null}
     */
    function findPaginationElement(keywords) {
        // 獲取所有具備點擊潛力的元素
        const elements = document.querySelectorAll('a, button, span, div, i');
        
        for (let el of elements) {
            // 1. 檢查內部文字 (innerText / textContent)
            const text = el.innerText ? el.innerText.trim() : "";
            
            // 2. 檢查 Title 屬性
            const title = el.getAttribute('title') || "";
            
            // 3. 檢查 Aria-label (無障礙標籤)
            const ariaLabel = el.getAttribute('aria-label') || "";

            // 檢查是否匹配
            const isMatch = keywords.some(kw => 
                (text === kw) || 
                (title.includes(kw)) || 
                (ariaLabel.includes(kw))
            );

            if (isMatch) {
                // 確保元素是可見的，且通常 A 標籤需要有 href 或是 Button
                if (el.offsetWidth > 0 || el.offsetHeight > 0) {
                    return el;
                }
            }
        }
        return null;
    }

    /**
     * 執行翻頁
     * @param {HTMLElement} el 
     */
    function triggerClick(el) {
        if (!el) return;
        
        // 如果是連結且有 href，直接跳轉（更穩定）
        if (el.tagName === 'A' && el.href && !el.href.startsWith('javascript')) {
            window.location.href = el.href;
        } else {
            // 否則模擬點擊
            el.click();
        }
    }

    // --- 鍵盤事件監聽 ---
    window.addEventListener('keydown', function(e) {
        // 防止在輸入框打字時誤觸翻頁 🙌
        const activeEl = document.activeElement;
        const isInput = activeEl.tagName === 'INPUT' || 
                        activeEl.tagName === 'TEXTAREA' || 
                        activeEl.isContentEditable;
        
        if (isInput) return;

        // 向左鍵 (KeyCode 37) -> 上一頁
        if (e.keyCode === 37) {
            const prevBtn = findPaginationElement(PREV_KEYWORDS);
            if (prevBtn) {
                console.log('偵測到上一頁按鈕:', prevBtn);
                triggerClick(prevBtn);
            }
        }

        // 向右鍵 (KeyCode 39) -> 下一頁
        else if (e.keyCode === 39) {
            const nextBtn = findPaginationElement(NEXT_KEYWORDS);
            if (nextBtn) {
                console.log('偵測到下一頁按鈕:', nextBtn);
                triggerClick(nextBtn);
            }
        }
    }, false);

})();

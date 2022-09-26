<section class="sousuo">
  <div class="search">
    <div class="search-box">
            <span class="search-icon"
                  style="background: url(<?php echo THEME_URL ?>/fonts/baidu.svg) 0px 0px; opacity: 1;"></span>
      <input type="text" id="txt" class="search-input <?php echo $this->options->isSearchClean == '1' ? 'can-clean' : ''; ?>" autocomplete="off" placeholder="输入关键字，按下回车搜索">
      <?php if($this->options->isSearchClean == '1'): ?>
        <button class="search-clean" id="search-clean" title="清空内容"><i class="fa fa-close"></i></button>
      <?php endif; ?>
      <button class="search-btn" id="search-btn"><i class="fa fa-search"></i></button>
    </div>
    <!-- 搜索索引 -->
    <div class="box search-hot-text" id="box" style="display: none;">
      <ul></ul>
    </div>
    <!-- 搜索引擎 -->
    <div class="search-engine" style="display: none;">
      <div class="search-engine-head">
        <strong class="search-engine-tit">选择您的默认搜索引擎：</strong>
        <div class="search-engine-tool">检索已有网址： <span id="hot-btn"></span></div>
      </div>
      <ul class="search-engine-list search-engine-list_zmki_ul">
      </ul>
    </div>
  </div>
</section>

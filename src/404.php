<?php
if (!defined('__TYPECHO_ROOT_DIR__')) exit;
define("THEME_URL", '/' . str_replace($this->options->siteUrl, "", $this->options->themeUrl));
?>
<!DOCTYPE HTML>
<html lang="zh">
<?php $this->need('header.php'); ?>
<body class="page-body <?php echo $_COOKIE['night'] == '1' ? 'night' : ''; ?>">
<div class="main-content">
    <div class="error-page text-center">
        <h1 class="error-page-title">404 - <?php _e('您要找的页面未找到。'); ?></h1>
        <p>看起来你似乎正在进入这个世界的未知领域，<b class="time_num">5</b> 秒后将自动逃离。</p>
        <p>如果逃离失败，请点击<a href="<?php $this->options->siteUrl(); ?>" rel="nofollow">这里</a>。</p>
    </div>
</div>
<br>
<script type="text/javascript">
    function runAway() {
        const timeNum = document.querySelector('.time_num');
        if (timeNum) {
            let num = Number(timeNum.textContent)
            num -= 1;
            timeNum.textContent = num.toString();

            if (num === 0) {
                location.href = "<?php $this->options->siteUrl(); ?>";
            } else {
                window.setTimeout(runAway, 1000);
            }
        }
    }
    window.setTimeout(runAway, 1000);
</script>
<style>
    .error-page-title {
        margin: 50px 0 25px 0;
        font-size: 25px;
    }
    footer.main-footer {
        margin-left: 0;
        margin-right: 0;
    }
</style>
<!-- Main Footer -->
<?php $this->need('footer.php'); ?>
</body>
</html>

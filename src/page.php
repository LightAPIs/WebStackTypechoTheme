<?php
/**
 * 关于
 *
 * @package custom
 *
 */
if (!defined('__TYPECHO_ROOT_DIR__')) exit;
?>

<!DOCTYPE html>
<?php $this->need('header.php'); ?>
<html lang="zh">
<body class="page-body <?php echo isset($_COOKIE['night']) && $_COOKIE['night'] == '1' ? 'night' : ''; ?>">
<div class="main-content">
    <div class="col-md-12">
        <div class="panel panel-default">
            <!-- 关于网站 -->
            <h4 class="text-gray">关于网站</h4>
            <div class="panel-body">
                <div class="row">
                    <div class="col-sm-12">
                        <blockquote>
                            <?php $this->content(); ?>
                        </blockquote>
                    </div>
                    <?php $this->need('comments.php'); ?>
                </div>
            </div>
        </div>
    </div>
</div>
<br>
<style>
    footer.main-footer {
        margin-left: 0;
        margin-right: 0;
    }
</style>
<!-- Main Footer -->
<?php $this->need('footer.php'); ?>
</body>
</html>
   
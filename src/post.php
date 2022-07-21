<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit;

define("THEME_URL", '/' . str_replace($this->options->siteUrl, "", $this->options->themeUrl));
?>

<!DOCTYPE html>
<?php $this->need('header.php'); ?>
<html lang="zh">
<body class="page-body <?php echo($_COOKIE['night'] == '1' ? 'night' : ''); ?>">

<div class="main-content">
    <div class="col-md-12">
        <div class="panel panel-default">
            <h1 class="text-gray"><?php $this->title() ?></h1>
            <p class="text-gray"><?php echo $this->fields->text; ?></p>
            <p><a href="<?php echo $this->fields->url; ?>" rel="nofollow"
                  target="_blank"><?php echo $this->fields->url; ?></a></p>
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

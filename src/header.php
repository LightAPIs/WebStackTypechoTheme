<?php
if (!defined('__TYPECHO_ROOT_DIR__')) exit;
define("THEME_URL", '/' . str_replace($this->options->siteUrl, "", $this->options->themeUrl));
?>
<head>
    <meta charset="<?php $this->options->charset(); ?>">
    <title><?php $this->archiveTitle(array(
            'category' => _t('分类 %s 下的文章'),
            'search' => _t('包含关键字 %s 的文章'),
            'tag' => _t('标签 %s 下的文章'),
            'author' => _t('%s 发布的文章')
        ), '', ' - '); ?><?php $this->options->title(); ?><?php if ($this->is('index')): ?><?php endif; ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="copyright" content="Light"/>
    <link rel="shortcut icon" href="<?php $this->options->favicon(); ?>">
    <link rel="apple-touch-icon" href="<?php $this->options->favicon(); ?>">
    <link rel="stylesheet" href="<?php echo THEME_URL ?>/css/fonts/linecons/css/linecons.css">
    <link rel="stylesheet" href="<?php echo THEME_URL ?>/css/font-awesome.min.css">
    <link rel="stylesheet" href="<?php echo THEME_URL ?>/css/bootstrap.css">
    <link rel="stylesheet" href="<?php echo THEME_URL ?>/css/xenon-core.css">
    <link rel="stylesheet" href="<?php echo THEME_URL ?>/css/xenon-components.css">
    <link rel="stylesheet" href="<?php echo THEME_URL ?>/css/xenon-skins.css">
    <link rel="stylesheet" href="<?php echo THEME_URL ?>/css/nav.css">
    <script>const themeUrl = "<?php echo THEME_URL ?>";</script>
    <script src="<?php echo THEME_URL ?>/js/jquery.min.js"></script>
    <?php $this->header(); ?>
</head>

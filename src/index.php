<?php

/**
 * 这是一个基于开源项目<a href="https://github.com/WebStackPage/WebStackPage.github.io" rel="nofollow" target="_blank">WebStack</a>和<a href="https://github.com/wclk/WebStack_ZMKI" rel="nofollow" target="_blank">WebStack_钻芒二开版</a>而制作的免费开源网址导航主题。
 * 主题项目源代码地址：<a href="https://github.com/LightAPIs/WebStackTypechoTheme" rel="nofollow" target="_blank">LightAPIs/WebStackTypechoTheme</a>。
 * 若需要排序功能可以安装插件：<a href="https://github.com/LightAPIs/EnablePostsOrder" rel="nofollow" target="_blank">LightAPIs/EnablePostsOrder</a>。
 *
 * @package WebStack Typecho Theme
 * @author Light
 * @version 1.2.0
 * @link https://github.com/LightAPIs
 */

if (!defined('__TYPECHO_ROOT_DIR__')) exit;
?>

<!DOCTYPE html>
<html lang="zh">
<?php $this->need('header.php'); ?>
<body class="page-body <?php echo isset($_COOKIE['night']) && $_COOKIE['night'] == '1' ? 'night' : ''; ?>">
<!-- skin-white -->
<div class="page-container">
    <?php $this->need('sidebar.php'); ?>
    <!--顶部美化开始-->
    <div class="board">
        <div class="left">
            <ul class="user-info-menu left-links list-inline list-unstyled">
                <li><span class="board-title"><a href="<?php $this->options->zmki_links(); ?>"><i
                                    class="fa fa-plus-square"></i> 管理网址</a></span></li>
                <li><span class="board-title "><a href="<?php $this->options->zmki_url(); ?>" target="_blank"><i
                                    class="fa fa-heart xiaotubiao"
                                    style="color: #fb5962;"></i>&nbsp;<?php $this->options->zmki_name(); ?></a></span>
                </li>
            </ul>
        </div>
        <?php if ($this->options->zmki_ah == '2') : ?>
            <div class="my_mode_switch" title="切换模式"></div>
        <?php endif; ?>
    </div>
    <!--顶部美化结束-->
    <div class="main-content">
        <?php if ($this->options->isSearch == '1') : ?>
            <?php $this->need('search.php'); ?>
        <?php endif; ?>
        <!--顶部新增模块开始	-->
        <?php if ($this->options->zmki_top_main == '1') : ?>
            <div class="zmki_top_main" style="display: flex;">
                <div class="col-lg-4">
                    <a class="colorful-card zmki_top_one" target="_blank"
                       href="<?php $this->options->zmki_top_main_one_url(); ?>">
                        <i class="<?php $this->options->zmki_top_main_one_icon(); ?>"></i>
                        <span class="wapnone"><?php $this->options->zmki_top_main_one_name(); ?></span>
                    </a>
                </div>
                <div class="col-lg-4">
                    <a class="colorful-card zmki_top_two" target="_blank"
                       href="<?php $this->options->zmki_top_main_two_url(); ?>">
                        <i class="<?php $this->options->zmki_top_main_two_icon(); ?>"></i>
                        <span class="wapnone"><?php $this->options->zmki_top_main_two_name(); ?></span>
                    </a>
                </div>
                <div class="col-lg-4">
                    <a class="colorful-card zmki_top_three" target="_blank"
                       href="<?php $this->options->zmki_top_main_three_url(); ?>">
                        <i class="<?php $this->options->zmki_top_main_three_icon(); ?>"></i>
                        <span class="wapnone"><?php $this->options->zmki_top_main_three_name(); ?></span>
                    </a>
                </div>
                <div class="col-lg-4">
                    <a class="colorful-card zmki_top_four" target="_blank"
                       href="<?php $this->options->zmki_top_main_four_url(); ?>">
                        <i class="<?php $this->options->zmki_top_main_four_icon(); ?>"></i>
                        <span class="wapnone"><?php $this->options->zmki_top_main_four_name(); ?></span>
                    </a>
                </div>
            </div>
        <?php endif; ?>
        <?php $this->widget('Widget_Metas_Category_List')->to($categories); ?>
        <?php while ($categories->next()) : ?>
            <?php if (count($categories->children) === 0) : ?>
                <?php $this->widget('Widget_Archive@category-' . $categories->mid, 'pageSize=10000&type=category', 'mid=' . $categories->mid)->to($posts); ?>
                <h4 class="text-gray"><i class="linecons-tag" style="margin-right: 7px;"
                                         id="<?php $categories->name(); ?>"></i><?php $categories->name(); ?></h4>
                <div class="row">
                    <?php while ($posts->next()) : ?>
                        <div class="col-sm-3">
                            <div class="xe-widget xe-conversations box2 label-info"
                                 onclick="window.open('<?php echo $posts->fields->url; ?>', '_blank')"
                                 data-toggle="tooltip" data-placement="bottom" title=""
                                 data-original-title="<?php echo $posts->fields->url; ?>">
                                <div class="xe-comment-entry">
                                <span class="xe-user-img">
                                    <?php if (strlen($posts->fields->logo) > 0) : ?>
                                        <img src="<?php echo $posts->fields->logo; ?>" class="img-circle" width="54"
                                             alt="<?php $posts->title(); ?>">
                                    <?php else : ?>
                                        <span class="img-circle no-img"><?php echo strlen($posts->title) > 0 ? mb_substr($posts->title, 0, 1) : '' ?></span>
                                    <?php endif; ?>
                                </span>
                                    <div class="xe-comment">
                                    <span href="javascript:void(0);" class="xe-user-name overflowClip_1">
                                        <strong><?php $posts->title(); ?></strong>
                                    </span>
                                        <p class="overflowClip_2"><?php echo $posts->fields->text; ?></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endwhile; ?>
                </div>
                <br/>
            <?php else : ?>
            <?php endif; ?>
        <?php endwhile; ?>
        <?php $this->need('footer.php'); ?>
    </div>

    <?php if ($this->options->fk_zmki == '1') : ?>
        <div class="fk_service">
            <ul>
                <li class="fk_service_box fk_service_sidebar visible-xs"
                    onclick="document.getElementById('01').click();" style="display: block;">
                    <a id="01" href="#" rel="toggle-sidebar" class="fk_service_box fk_service_sidebar" title="切换侧栏"
                       data-toggle="mobile-menu">1</a>
                </li>
                <li class="fk_service_box fk_service_upward"
                    onclick="document.getElementById('02').click();" style="display: block;">
                    <a id="02" href="/#" rel="go-top" class="fk_service_box fk_service_upward" title="返回顶部">2</a>
                </li>
            </ul>
        </div>
    <?php endif; ?>
</div>
</body>
</html>

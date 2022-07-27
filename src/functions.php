<?php

use Utils\Helper;

if (!defined('__TYPECHO_ROOT_DIR__')) exit;

function themeConfig($form)
{
    $v_time = '1.1.0';
    $theme_url = '/' . str_replace(Helper::options()->siteUrl, "", Helper::options()->themeUrl);

    echo <<<EOD
<style>
    p {
        margin: 15px 0 10px 0 !important;
    }
    span label {
        margin-bottom: -5px;
    }
    .zmki_ht_about {
        margin: 0;
    }
    span a, p a {
        text-decoration: underline;
    }
    .zmki_ht_about a { 
        color: #147ed2;
    }
    .zmki_ht_about_mian {
        width: 100%;
        padding:0 0 0  20px ;
    }
    .zmki_ht_about_mian h2 {
        color: #000;
        margin: 0;
    }
    .btn { 
        color:#000;
        padding: 0 10px;
        border-radius: 4px;
        background-color: whitesmoke;
        box-shadow: 0 6px 7px -5px rgba(210, 210, 210, 0.6);
    }
    form.home {
        margin-top: 15px;
        float: none !important;
    }
    .zmki_aliico {
        width: 20px;
        float: initial;
        height: 20px;
        margin-bottom: -4px;
    }
</style>
<link rel="stylesheet" href="$theme_url/css/fonts/font_1953461/iconfont.css">  
<script src="$theme_url/css/fonts/font_1953461/iconfont.js"></script>
EOD;

    //! 模板设置处理
    $str1 = explode('/themes/', Helper::options()->themeUrl);
    $str2 = explode('/', $str1[1]);
    $name = $str2[0];
    $db = Typecho_Db::get();
    $sjdq = $db->fetchRow($db->select()->from('table.options')->where('name = ?', 'theme:' . $name));
    $ysj = $sjdq['value'];
    if (isset($_POST['type'])) {
        $tips = '';
        if ($_POST["type"] == "备份模板设置数据") {
            if ($db->fetchRow($db->select()->from('table.options')->where('name = ?', 'theme:' . $name . 'bf'))) {
                $update = $db->update('table.options')->rows(array('value' => $ysj))->where('name = ?', 'theme:' . $name . 'bf');
                $db->query($update);
                $tips = '备份已更新。';
            } else {
                if ($ysj) {
                    $insert = $db->insert('table.options')->rows(array('name' => 'theme:' . $name . 'bf', 'user' => '0', 'value' => $ysj));
                    $db->query($insert);
                    $tips = '备份完成。';
                }
            }
        }
        if ($_POST["type"] == "还原模板设置数据") {
            if ($db->fetchRow($db->select()->from('table.options')->where('name = ?', 'theme:' . $name . 'bf'))) {
                $sjdub = $db->fetchRow($db->select()->from('table.options')->where('name = ?', 'theme:' . $name . 'bf'));
                $bsj = $sjdub['value'];
                $update = $db->update('table.options')->rows(array('value' => $bsj))->where('name = ?', 'theme:' . $name);
                $db->query($update);
                $tips = '检测到模板备份数据，恢复完成。';
            } else {
                $tips = '没有模板备份数据，恢复不了哦！';
            }
        }
        if ($_POST["type"] == "删除备份数据") {
            if ($db->fetchRow($db->select()->from('table.options')->where('name = ?', 'theme:' . $name . 'bf'))) {
                $delete = $db->delete('table.options')->where('name = ?', 'theme:' . $name . 'bf');
                $db->query($delete);
                $tips = '删除成功。';
            } else {
                $tips = '不用删了！备份不存在！！！';
            }
        }

        $optionsTheme = Helper::options()->adminUrl('options-theme.php', true);
        echo <<<EOD
<div class="notify">
    <p>$tips</p>
    <p>请等待自动刷新！如果等不到请点击<a href="$optionsTheme">这里</a></p>
</div>
<script type="text/javascript">
    window.setTimeout(() => {
        location.href="$optionsTheme";
    }, 2500);
</script>
EOD;
    }

    //! 页面内容
    $nameBf = $name . 'bf';
    $optionsGeneral = Helper::options()->adminUrl('options-general.php', true);
    echo <<<EOD
<link href="$theme_url/css/bootstrap.css" rel="stylesheet">
<script src="$theme_url/js/jquery.min.js"></script>
<script src="$theme_url/js/bootstrap.min.js"></script>
<hr>
<p class="active-tab"><strong><svg  class="icon zmki_aliico" aria-hidden="true"><use xlink:href="#icon-project"></use></svg> WebStack 网址导航 Typecho 主题</strong></p>
<p class="previous-tab"><strong><svg  class="icon zmki_aliico" aria-hidden="true"><use xlink:href="#icon-chicken"></use></svg> 主题版本号: </strong>$v_time</p>
<hr>
<ul id="myTab" class="nav nav-tabs">
<li class="active"><a href="#home" data-toggle="tab">备份与恢复</a></li>
<li><a href="#about" data-toggle="tab">关于主题</a></li> 
</ul>
<div id="myTabContent" class="tab-content">
<div class="tab-pane fade in active" id="home">
    <form class="protected home col-mb-12" action="?$nameBf" method="post">
        <input type="submit" name="type" class="btn btn-s" value="备份模板设置数据" />&nbsp;&nbsp;
        <input type="submit" name="type" class="btn btn-s" value="还原模板设置数据" />&nbsp;&nbsp;
        <input type="submit" name="type" class="btn btn-s" value="删除备份数据" />
    </form>
</div>
<div class="tab-pane fade" id="about">
    <div class="zmki_ht_about">
        <div class="zmki_ht_about_mian">
            <p>Github地址: <a href="https://github.com/LightAPIs/WebStackTypechoTheme" target="_blank">LightAPIs/WebStackTypechoTheme</a></p>
            <p>WebStack_钻芒二开版项目地址: <a href="https://github.com/wclk/WebStack_ZMKI" target="_blank">wclk/WebStack_ZMKI</a></p> 
            <p>Webstack网址导航项目地址: <a href="https://github.com/WebStackPage/WebStackPage.github.io" target="_blank">WebStackPage/WebStackPage.github.io</a></p>
            <p>本主题基于WebStack_钻芒二开版及原Webstack网址导航项目修改并免费开源发布。</p>
        </div>
    </div>
</div>
</div>
<hr>
<svg class="icon zmki_aliico" aria-hidden="true"><use xlink:href="#icon-sound"></use></svg>&nbsp;
<span>自定义站点名称和后缀功能直接移步至<a href="$optionsGeneral">基本设置</a>即可</span>
<hr>
<svg class="icon zmki_aliico" aria-hidden="true"><use xlink:href="#icon-set"></use></svg>&nbsp;
<b>提示：主题设置选择后回车可快捷保存</b>
<hr>
EOD;

    // 左侧 logo
    $Biglogo = new Typecho_Widget_Helper_Form_Element_Text('Biglogo', NULL, "/usr/themes/WebStack/images/logo@2x.png", _t('<svg class="icon zmki_aliico" aria-hidden="true"><use xlink:href="#icon-star"></use></svg> LOGO 地址'), _t('主页左侧 logo 地址，尺寸 178*40'));
    $form->addInput($Biglogo);
    // favicon
    $favicon = new Typecho_Widget_Helper_Form_Element_Text('favicon', NULL, "/usr/themes/WebStack/images/logo.png", _t('<svg class="icon zmki_aliico" aria-hidden="true"><use xlink:href="#icon-edit"></use></svg> Favicon 地址'), _t('网站图标地址，ico, png, jpg 等图片格式均可，刷新浏览器缓存后生效'));
    $form->addInput($favicon);
    // 左侧菜单栏字体大小
    $menu_title = new Typecho_Widget_Helper_Form_Element_Text('menu_title', NULL, '13', _t('<svg class="icon zmki_aliico" aria-hidden="true"><use xlink:href="#icon-position"></use></svg> 左侧菜单栏字体大小'), _t('请输入字体大小，如 13，留空则默认为 13(13px)'));
    $form->addInput($menu_title);
    // PC端每行显示数量
    $zmki_pcsl = new Typecho_Widget_Helper_Form_Element_Radio('zmki_pcsl', array('0' => _t('单栏'), '1' => _t('双栏'), '2' => _t('三栏'), '3' => _t('四栏'), '4' => _t('五栏'), '5' => _t('六栏'), '6' => _t('七栏'), '7' => _t('八栏')), '3', _t('<svg  class="icon zmki_aliico" aria-hidden="true"><use xlink:href="#icon-pc"></use></svg> PC 端栏目数量'), _t("PC 端每行显示数量的布局。默认四栏，为美观考虑推荐设置四到六栏<br>注意：如调整失效，请刷新请浏览器缓存"));
    $form->addInput($zmki_pcsl);
    // 手机端每行显示数量
    $zmki_wapsl = new Typecho_Widget_Helper_Form_Element_Radio('zmki_wapsl', array('0' => _t('单栏'), '1' => _t('双栏'), '2' => _t('三栏')), '0', _t('<svg  class="icon zmki_aliico" aria-hidden="true"><use xlink:href="#icon-phone"></use></svg> 手机端栏目数量'), _t("手机端显示数量的布局。此功能可避免页面过于庸长，默认单栏，推荐双栏显示<br>注意：如调整失效，请刷新请浏览器缓存"));
    $form->addInput($zmki_wapsl);
    // 暗黑开关
    $zmki_ah = new Typecho_Widget_Helper_Form_Element_Radio('zmki_ah', array('0' => _t('跟随系统'), '1' => _t('自动切换'), '2' => _t('手动切换')), '1', _t('<svg class="icon zmki_aliico" aria-hidden="true"><use xlink:href="#icon-battery"></use></svg> 暗黑模式'), _t("跟随系统：跟随系统设置；自动切换：19:00~7:00；手动切换：主页上显示暗黑模式开关"));
    $form->addInput($zmki_ah);
    // 顶部模块
    $zmki_top_main = new Typecho_Widget_Helper_Form_Element_Radio('zmki_top_main', array('0' => _t('禁用'), '1' => _t('启用')), '1', _t('<svg class="icon zmki_aliico" aria-hidden="true"><use xlink:href="#icon-prompt"></use></svg> <span style="color: #608cee; margin-right:0px;">顶部</span><span style="color: #fb5962;margin-right:0px;">多色</span><span style="color: #fbb359;margin-right:0px;">模块</span><span style="color: #53bf6b;margin-right:0px;">开关</span>'), _t("是否开启网站顶部四项多色小模块"));
    $form->addInput($zmki_top_main);
    // 顶部模块 蓝色 文字自定义
    $zmki_top_main_one_name = new Typecho_Widget_Helper_Form_Element_Text('zmki_top_main_one_name', NULL, '项目地址', _t('<span style="color: #608cee; margin-right:0px;">蓝色模块文字</span>'), _t('输入顶部蓝色模块内的文字，默认 项目地址'));
    $form->addInput($zmki_top_main_one_name);
    $zmki_top_main_one_icon = new Typecho_Widget_Helper_Form_Element_Text('zmki_top_main_one_icon', NULL, 'fa fa-safari', _t('<span style="color: #608cee; margin-right:0px;">蓝色模块</span>图标'), _t('自定义蓝色模块内文字前的 Font Awesome 图标，图标帮助可查看:<a target="_blank" href="http://www.fontawesome.com.cn/icons-ui/">Font Awesome 中文网</a>，蓝色默认 fa fa-safari'));
    $form->addInput($zmki_top_main_one_icon);
    $zmki_top_main_one_url = new Typecho_Widget_Helper_Form_Element_Text('zmki_top_main_one_url', NULL, 'https://github.com/LightAPIs/WebStackTypechoTheme', _t('<span style="color: #608cee; margin-right:0px;">蓝色模块</span>跳转链接'), _t('输入蓝色模块跳转的链接,'));
    $form->addInput($zmki_top_main_one_url);
    // 顶部模块 红色 文字自定义
    $zmki_top_main_two_name = new Typecho_Widget_Helper_Form_Element_Text('zmki_top_main_two_name', NULL, 'WebStack_钻芒二开版', _t('<span style="color: #fb5962; margin-right:0px;">红色模块文字</span>'), _t('输入顶部红色模块内的文字，默认 WebStack_钻芒二开版'));
    $form->addInput($zmki_top_main_two_name);
    $zmki_top_main_two_icon = new Typecho_Widget_Helper_Form_Element_Text('zmki_top_main_two_icon', NULL, 'fa fa-star', _t('<span style="color: #fb5962; margin-right:0px;">红色模块</span>图标'), _t('自定义红色模块内文字前的 Font Awesome 图标，图标帮助可查看:<a target="_blank" href="http://www.fontawesome.com.cn/icons-ui/">Font Awesome 中文网</a>，红色默认 fa fa-star'));
    $form->addInput($zmki_top_main_two_icon);
    $zmki_top_main_two_url = new Typecho_Widget_Helper_Form_Element_Text('zmki_top_main_two_url', NULL, 'https://github.com/wclk/WebStack_ZMKI', _t('<span style="color: #fb5962; margin-right:0px;">红色模块</span>跳转链接'), _t('输入红色模块跳转的链接,'));
    $form->addInput($zmki_top_main_two_url);
    // 顶部模块 黄色 文字自定义
    $zmki_top_main_three_name = new Typecho_Widget_Helper_Form_Element_Text('zmki_top_main_three_name', NULL, 'WebStack', _t('<span style="color: #fbb359; margin-right:0px;">黄色模块文字</span>'), _t('输入顶部黄色模块内的文字，默认 WebStack'));
    $form->addInput($zmki_top_main_three_name);
    $zmki_top_main_three_icon = new Typecho_Widget_Helper_Form_Element_Text('zmki_top_main_three_icon', NULL, 'fa fa-registered', _t('<span style="color: #fbb359; margin-right:0px;">黄色模块</span>图标'), _t('自定义黄色模块内文字前的 Font Awesome 图标，图标帮助可查看:<a target="_blank" href="http://www.fontawesome.com.cn/icons-ui/">Font Awesome 中文网</a>，黄色默认 fa fa-registered'));
    $form->addInput($zmki_top_main_three_icon);
    $zmki_top_main_three_url = new Typecho_Widget_Helper_Form_Element_Text('zmki_top_main_three_url', NULL, 'https://github.com/WebStackPage/WebStackPage.github.io', _t('<span style="color: #fbb359; margin-right:0px;">黄色模块</span>跳转链接'), _t('输入黄色模块跳转的链接,'));
    $form->addInput($zmki_top_main_three_url);
    // 顶部模块 绿色 文字自定义
    $zmki_top_main_four_name = new Typecho_Widget_Helper_Form_Element_Text('zmki_top_main_four_name', NULL, 'Typecho', _t('<span style="color: #53bf6b; margin-right:0px;">绿色模块文字</span>'), _t('输入顶部绿色模块内的文字，默认 Typecho'));
    $form->addInput($zmki_top_main_four_name);
    $zmki_top_main_four_icon = new Typecho_Widget_Helper_Form_Element_Text('zmki_top_main_four_icon', NULL, 'fa fa-diamond', _t('<span style="color: #53bf6b; margin-right:0px;">绿色模块</span>图标'), _t('自定义绿色模块内文字前的 Font Awesome 图标，图标帮助可查看:<a target="_blank" href="http://www.fontawesome.com.cn/icons-ui/">Font Awesome 中文网</a>，绿色默认 fa fa-diamond'));
    $form->addInput($zmki_top_main_four_icon);
    $zmki_top_main_four_url = new Typecho_Widget_Helper_Form_Element_Text('zmki_top_main_four_url', NULL, 'https://typecho.org/', _t('<span style="color: #53bf6b; margin-right:0px;">绿色模块</span>跳转链接'), _t('输入绿色模块跳转的链接,'));
    $form->addInput($zmki_top_main_four_url);
    // 顶栏文字自定义
    $zmki_name = new Typecho_Widget_Helper_Form_Element_Text('zmki_name', NULL, '后台管理', _t('顶栏文字'), _t('输入主页顶栏管理网址右侧自定义文字，默认 后台管理'));
    $form->addInput($zmki_name);
    // 顶栏链接自定义
    $zmki_url = new Typecho_Widget_Helper_Form_Element_Text('zmki_url', NULL, '/admin/index.php', _t('顶栏链接'), _t('输入主页顶栏管理网址右侧文字的 url，默认 /admin/index.php'));
    $form->addInput($zmki_url);
    $zmki_links = new Typecho_Widget_Helper_Form_Element_Text('zmki_links', NULL, '/admin/manage-posts.php', _t('管理网址链接'), _t('默认 /admin/manage-posts.php'));
    $form->addInput($zmki_links);
    $Isabout = new Typecho_Widget_Helper_Form_Element_Text('Isabout', NULL, '/about.html', _t('关于我们 URL 链接'), _t('默认为 /about.html'));
    $form->addInput($Isabout);
    // 搜索功能
    $isSearch = new Typecho_Widget_Helper_Form_Element_Radio('isSearch', array('0' => _t('禁用'), '1' => _t('启用')), '1', _t('搜索功能'), _t("是否在主页上启用搜索框"));
    $form->addInput($isSearch);
    $isSearchTop = new Typecho_Widget_Helper_Form_Element_Radio('isSearchTop', array('0' => _t('禁用'), '1' => _t('启用')), '0', _t('搜索框置顶'), _t('始终将搜索框置顶，即不受页面滚动影响'));
    $form->addInput($isSearchTop);
    // 右侧浮动窗
    $fk_zmki = new Typecho_Widget_Helper_Form_Element_Radio('fk_zmki', array('0' => _t('禁用'), '1' => _t('启用')), '1', _t('右侧浮动窗'), _t("是否显示右侧浮动窗，包含返回顶部按钮以及手机端的侧栏切换"));
    $form->addInput($fk_zmki);
    // 网站运行时间
    $zmki_time_no = new Typecho_Widget_Helper_Form_Element_Radio('zmki_time_no', array('0' => _t('禁用'), '1' => _t('启用')), '1', _t('网站运行时间'), _t("选择开启即会在网站底部栏显示网站已运行时间。如开启请不要忘记设置下边的创建时间"));
    $form->addInput($zmki_time_no);
    // 网站创建时间
    $zmki_time = new Typecho_Widget_Helper_Form_Element_Text('zmki_time', NULL, '7/1/2022 11:13:14', _t('网站创建时间'), _t('按格式填写创建时间，分别是月/日/年 时:分:秒。默认: 7/1/2022 11:13:14'));
    $form->addInput($zmki_time);
}

//输出导航
function themeFields($layout)
{
    $url = new Typecho_Widget_Helper_Form_Element_Text('url', NULL, NULL, _t('跳转链接'), _t('请输入跳转的 URL'));
    $text = new Typecho_Widget_Helper_Form_Element_Text('text', NULL, NULL, _t('链接描述'), _t('请输入链接描述'));
    $logo = new Typecho_Widget_Helper_Form_Element_Text('logo', NULL, NULL, _t('链接 Logo'), _t('请输入 Logo 的 URL'));
    $layout->addItem($url);
    $layout->addItem($text);
    $layout->addItem($logo);
    logoPreview();
}

function logoPreview() {
    if (!isset($a)) {
        static $a = 0;
        if ($a == 0) {
            $defaultTip = _t('请输入 Logo 的 URL');
            $logoTitle = _t('填写 Logo');
            $logoDes = _t('请在下方的输入框内输入要填写的 Logo 地址');
            $okText = _t('确定');
            $cancelText = _t('取消');
            echo <<<EOD
<style>
.webstack-theme-preview-span {
    float: right;
    margin-right: 1%;
}
.webstack-theme-preview-image {
    max-width: 54px;
    max-height: 54px;
    border-radius: 50%;
}
.webstack-wmd-prompt {
    position: absolute;
    top: 0px;
    z-index: 1000;
    opacity: 0.5;
    height: 100%;
    left: 0px;
    width: 100%;
}
</style>
<script type="text/javascript">
function webstackImageHandler(imgDom, loadCallback, errorCallback) {
    if (imgDom.complete) {
        if (typeof loadCallback === 'function') {
            loadCallback(imgDom);
        }
    } else {
        imgDom.onload = function () {
            if (typeof loadCallback === 'function') {
                loadCallback(imgDom);
            }
        };
        imgDom.onerror = function () {
            if (typeof errorCallback === 'function') {
                errorCallback();
            }
        };
    }
}
function webstackCreateDialog(filename, url, okCallback, cancelCallback) {
    const dialogDiv = document.createElement('div');
    dialogDiv.className = 'wmd-prompt-dialog';
    dialogDiv.setAttribute('role', 'dialog');
    const textDiv = document.createElement('div');
    textDiv.innerHTML = '<p><b>$logoTitle (' + filename + ')</b></p><p>$logoDes</p>';
    const logoForm = document.createElement('form');
    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.value = url;
    const okBtn = document.createElement('button');
    okBtn.type = 'button';
    okBtn.className = 'btn btn-s primary';
    okBtn.textContent = '$okText';
    okBtn.addEventListener('click', e => {
        e.stopPropagation();
        if (typeof okCallback === 'function') {
            okCallback(textInput);
        }
        dialogDiv && dialogDiv.remove();
    });
    const cancelBtn = document.createElement('button');
    cancelBtn.type = 'button';
    cancelBtn.className = 'btn btn-s';
    cancelBtn.textContent = '$cancelText';
    cancelBtn.addEventListener('click', e => {
        e.stopPropagation();
        if (typeof cancelCallback === 'function') {
            cancelCallback();
        }
        dialogDiv && dialogDiv.remove();
    })
    logoForm.appendChild(textInput);
    logoForm.appendChild(okBtn);
    logoForm.appendChild(cancelBtn);
    dialogDiv.appendChild(textDiv);
    dialogDiv.appendChild(logoForm);
    return dialogDiv;
}
function webstackCreatePrompt() {
    const prompt = document.createElement('div');
    prompt.className = 'wmd-prompt-background webstack-wmd-prompt';
    prompt.style.height = document.body.clientHeight + 'px';
    return prompt;
}
window.onload = function() {
    const logoInput = document.querySelector('input[name="fields[logo]"]');
    if (logoInput) {
        const defaultTip = "$defaultTip";
        const previewSpan = document.createElement('span');
        previewSpan.className = 'webstack-theme-preview-span';
        const img = document.createElement('img');
        img.className = 'webstack-theme-preview-image';
        img.width = 54;
        img.src = logoInput.value;
        const p = logoInput.parentNode.querySelector('.description');
        if (logoInput.value.length === 0) {
            img.style.display = 'none';
        } else {
            webstackImageHandler(
                img,
                imgDom => {
                    p.textContent = '( ' + imgDom.naturalWidth + ' x ' + imgDom.naturalHeight + ' )';
                },
                () => {
                    img.style.display = 'none';
                    p.textContent = defaultTip; 
                }
            );
        }
        previewSpan.appendChild(img);
        logoInput.after(previewSpan);
        logoInput.addEventListener('change', e => {
            img.src = e.target.value;
            if (e.target.value) {
                img.style.display = 'block';
                webstackImageHandler(
                    img,
                    imgDom => {
                        p.textContent = '( ' + imgDom.naturalWidth + ' x ' + imgDom.naturalHeight + ' )';
                    },
                    () => {
                        img.style.display = 'none';
                        p.textContent = defaultTip;                        
                    }
                );
            } else {
                img.style.display = 'none';
                p.textContent = defaultTip;
            }
        });
        
        if (window.Typecho && window.Typecho.insertFileToEditor) {
            window.Typecho.insertFileToEditor = function(file, url, _isImage) {
                const prompt = webstackCreatePrompt();
                const dialog = webstackCreateDialog(file, url, textInput => {
                    logoInput.value = textInput.value;
                    img.src = logoInput.value;
                    if (logoInput.value.length === 0) {
                        img.style.display = 'none';
                        p.textContent = defaultTip;
                    } else {
                        img.style.display = 'block';
                        webstackImageHandler(
                            img,
                            imgDom => {
                                p.textContent = '( ' + imgDom.naturalWidth + ' x ' + imgDom.naturalHeight + ' )';
                            },
                            () => {
                                img.style.display = 'none';
                                p.textContent = defaultTip; 
                            }
                        );
                    }
                    prompt && prompt.remove();
                }, () => {
                    prompt && prompt.remove();
                });
                setTimeout(() => {
                    document.body.appendChild(prompt);
                    document.body.appendChild(dialog);
                }, 0);
            }
        }
    }
};
</script>
EOD;
        }
        $a++;
    }
}

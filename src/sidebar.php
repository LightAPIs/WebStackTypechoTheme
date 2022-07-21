<div class="sidebar-menu toggle-others fixed">
    <div class="sidebar-menu-inner">
        <header class="logo-env">
            <!-- logo -->
            <div class="logo">
                <img class="logo_size" src="<?php $this->options->Biglogo(); ?>" width="100%"
                     alt="<?php $this->options->IndexName(); ?>"/>
            </div>
        </header>
        <ul id="main-menu" class="main-menu mobile-is-visible">
            <?php $this->widget('Widget_Metas_Category_List')->to($categorys); ?>
            <?php while ($categorys->next()): ?>
                <?php if ($categorys->levels === 0): ?>
                    <?php $children = $categorys->getAllChildren($categorys->mid); ?>
                    <?php if (empty($children)) { ?>
                        <li>
                            <a href="<?php if ($this->is('index')): ?><?php else: ?>/<?php endif; ?>#<?php $categorys->name(); ?>"
                               class="smooth">
                                <i class="fa fa-<?php $categorys->slug(); ?>"></i>
                                <span class="title"><?php $categorys->name(); ?></span>
                            </a>
                        </li>
                    <?php } else { ?>
                        <li>
                            <a>
                                <i class="fa fa-<?php $categorys->slug(); ?>"></i>
                                <span class="title"><?php $categorys->name(); ?></span>
                            </a>
                            <ul>
                                <?php foreach ($children as $mid) { ?>
                                    <?php $child = $categorys->getCategory($mid); ?>
                                    <li>
                                        <a href="<?php if ($this->is('index')): ?><?php else: ?>/<?php endif; ?>#<?php echo $child['name']; ?>"
                                           class="smooth"><?php echo $child['name']; ?></a>
                                    </li>
                                <?php } ?>
                            </ul>
                        </li>
                    <?php } ?>
                <?php endif; ?>
            <?php endwhile; ?>
            <li class="submit-tag">
                <a href="<?php $this->options->Isabout(); ?>">
                    <i class="linecons-heart"></i>
                    <span class="smooth">关于本站</span>
                </a>
            </li>
        </ul>
    </div>
</div>
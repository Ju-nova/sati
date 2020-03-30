<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package homeworks.ru
 */

get_header();
?>

<header></header>

<main class="container">
	<div class="logo__inner">
		<a class="logo__inner-link" href="/">
			<img src="<?= get_field('homeworks-logo', 'option') ?>" alt="" />
		</a>

		<?php if ( function_exists( 'dimox_breadcrumbs' ) ) dimox_breadcrumbs(); ?>
	</div>

	<?php
		$custom_terms = get_terms('work');

		foreach($custom_terms as $custom_term) {
			wp_reset_query();
			$args = array('post_type' => 'cpt_work',
				'tax_query' => array(
					array(
						'taxonomy' => 'work',
						'field' => 'slug',
						'terms' => $custom_term->slug,
					),
				),
			);
		
			$loop = new WP_Query($args);
			if($loop->have_posts()) {
				?>
				<section class="category-page">
					<div class="category-page__content">
						<h5 class="category-page__title">
							<?= $custom_term->name ?>
						</h5>
						<div class="category-page__wrapper">
							<?php 
								while($loop->have_posts()) : $loop->the_post();
									get_template_part( 'template-parts/content', get_post_type() );
								endwhile;
							?>
						</div>
					</div>
				</section>
				<?php
			}
		}
	?>
	
	<?php
		$custom_terms = get_terms('life');

		foreach($custom_terms as $custom_term) {
			wp_reset_query();
			$args = array('post_type' => 'cpt_life',
				'tax_query' => array(
					array(
						'taxonomy' => 'life',
						'field' => 'slug',
						'terms' => $custom_term->slug,
					),
				),
			);
		
			$loop = new WP_Query($args);
			if($loop->have_posts()) {
				?>
				<section class="category-page">
					<div class="category-page__content">
						<h5 class="category-page__title">
							<?= $custom_term->name ?>
						</h5>
						<div class="category-page__wrapper">
							<?php 
								while($loop->have_posts()) : $loop->the_post();
									get_template_part( 'template-parts/content', get_post_type() );
								endwhile;
							?>
						</div>
					</div>
				</section>
				<?php
			}
		}
	?>

	<?php
		$custom_terms = get_terms('education');

		foreach($custom_terms as $custom_term) {
			wp_reset_query();
			$args = array('post_type' => 'cpt_education',
				'tax_query' => array(
					array(
						'taxonomy' => 'education',
						'field' => 'slug',
						'terms' => $custom_term->slug,
					),
				),
			);
		
			$loop = new WP_Query($args);
			if($loop->have_posts()) {
				?>
				<section class="category-page">
					<div class="category-page__content">
						<h5 class="category-page__title">
							<?= $custom_term->name ?>
						</h5>
						<div class="category-page__wrapper">
							<?php 
								while($loop->have_posts()) : $loop->the_post();
									get_template_part( 'template-parts/content', get_post_type() );
								endwhile;
							?>
						</div>
					</div>
				</section>
				<?php
			}
		}
	?>

</main>

<?php
get_sidebar();
get_footer();

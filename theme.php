<?php
namespace Grav\Theme;

use Gantry\Framework\Gantry;
use Gantry\Framework\Theme as GantryTheme;
use Grav\Common\Theme;
use RocketTheme\Toolbox\ResourceLocator\UniformResourceLocator;


class Noda extends Theme
{
    public $gantry = '5.4.0';

    /**
     * @var GantryTheme
     */
    protected $theme;

    /**
     * @return array
     */
    public static function getSubscribedEvents()
    {
        return [
            'onThemeInitialized' => ['onThemeInitialized', 0],
            'onAdminMenu' => ['onAdminMenu', 0],
        ];
    }
   
    public function onAdminMenu()
    {
	
		if (isset($this->grav['theme']->config()['links'])) {
			
			foreach ($this->grav['theme']->config()['links'] as $key => $val) {

				$this->grav['twig']->plugins_hooked_nav[$key] = [
					'route' => "..".$val, 
					'icon' => 'fa-link'
				];
		
			}
		
		}
		
    }
	
    public function onThemeInitialized()
    {
        if (defined('GRAV_CLI') && GRAV_CLI) {
            return;
        }

        /** @var UniformResourceLocator $locator */
        $locator = $this->grav['locator'];
        $path = $locator('theme://');
        $name = $this->name;

        if (!class_exists('\Gantry5\Loader')) {
            if ($this->isAdmin()) {
                $messages = $this->grav['messages'];
                $messages->add('Please enable Gantry 5 plugin in order to use current theme!', 'error');
                return;
            } else {
                throw new \LogicException('Please install and enable Gantry 5 Framework plugin!');
            }
        }

        // Setup Gantry 5 Framework or throw exception.
        \Gantry5\Loader::setup();

        // Get Gantry instance.
        $gantry = Gantry::instance();

        // Set the theme path from Grav variable.
        $gantry['theme.path'] = $path;
        $gantry['theme.name'] = $name;

        $this->enable([
            'onTwigSiteVariables' => ['onTwigSiteVariables', 0],
		]);
		
        // Define the template.
        require $locator('theme://includes/theme.php');

		$theme_uri = str_replace( $_SERVER['DOCUMENT_ROOT'], '', $locator('theme://'));

        if ($this->isAdmin()) {
			$assets = $this->grav['assets'];
			$assets->addCss($theme_uri.'/admin/poko.css', 1);
			$assets->addJs($theme_uri.'/admin/poko.js', 1);
		} 

        // Define Gantry services.
 
		$gantry['theme'] = function ($c) {
            return new \Gantry\Theme\Noda($c['theme.path'], $c['theme.name']);
        };
    }
	

	public function onTwigSiteVariables()
    {
        $gantry = Gantry::instance();		
        $locator = $this->grav['locator'];		
		$adminCookieSuffix = '-admin';
		$this->adminCookie = session_name() . $adminCookieSuffix; 

        if (isset($_COOKIE[$this->adminCookie]) === true) {
			$this->config->set('gas.admin',true);
        }

		$log_path = $locator('log://popularity');
		if (file_exists($log_path . '/daily.json')) {
		$this->config->set('gas.stat.daily',array_values((array)json_decode(file_get_contents($log_path . '/daily.json')))[0]);
		}
		if (file_exists($log_path . '/monthly.json')) {
		$this->config->set('gas.stat.monthly',array_values((array)json_decode(file_get_contents($log_path . '/monthly.json')))[0]);
		}
		if (file_exists($log_path . '/totals.json')) {
		$this->config->set('gas.stat.total',array_values((array)json_decode(file_get_contents($log_path . '/totals.json')))[0]);
		}

    }	
	
}

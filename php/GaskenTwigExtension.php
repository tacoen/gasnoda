<?php
namespace Grav\Theme;

use \Grav\Common\Grav;
use Grav\Common\Utils;

class GaskenTwigExtension extends \Twig_Extension
{

    /**
     * Returns extension name.
     *
     * @return string
     */
    public function getName()
    {
        return 'GaskenTwigExtension';
    }

    public function getFilters()
    {
        return [
            new \Twig_SimpleFilter('filedir', [$this, 'filedir']),
            new \Twig_SimpleFilter('fileget', [$this, 'fileget']),
			new \Twig_SimpleFilter('stripper', [$this, 'stripper_func']),			
		];
    }

    public function getFunctions()
    {
        return [
            new \Twig_SimpleFunction('filedir', [$this, 'filedir']),
            new \Twig_SimpleFunction('fileget', [$this, 'fileget']),
            new \Twig_SimpleFunction('randomwords', [$this, 'randomwords']),
        ];
    }

	public function stripper_func($string)
    {
		
		$tmp = explode("\n", $string);
		$tmp = preg_replace('/^\s+$/', '', $tmp);
		$tmp = array_filter($tmp);
		$string = implode("\n", $tmp);		
		$string = preg_replace('/\t/', '    ', $string);
		$string = preg_replace('/    /', '  ', $string);
		return (trim($string));
    }	

	public function randomwords($n) {
		if ($n > 100) { $n=100; }
		$w = '';
		$words = ['lorem','ipsum','dolor','sit','amet','consectetur','adipiscing','elit','suspendisse','turpis','ligula','commodo','at','vehicula','scelerisque','tincidunt','ac','ante','duis','a','scelerisque','metus','a','congue','felis','mauris','mattis','risus','id','finibus','rhoncus','in','sit','amet','aliquet','nisi','vivamus','vestibulum','lectus','ipsum','eu','porta','elit','laoreet','et','aliquam','porttitor','nisl','eu','elit','viverra','pulvinar','vivamus','ex','enim','lacinia','molestie','efficitur','et','mattis','non','metus','morbi','sit','amet','dictum','diam','imperdiet','vulputate','arcu','maecenas','magna','sapien','facilisis','vitae','posuere','tincidunt','faucibus','non','tortor','praesent','quis','eleifend','dolor','ut','congue','ut','justo','vitae','suscipit','suspendisse','non','dictum','nisl','aenean','semper','eget','sapien','nec','dignissim'];
		shuffle($words); 
		for ($x = 0; $x <= $n; $x++) { $w .= $words[$x]. ' '; }
		return rtrim($w);
	}
	
	public function fileget($file)
	{
		return file_get_contents(GRAV_ROOT.$file);
	}
	
    public function filedir($path='',$pattern='*')
    {

		if (Utils::startsWith($path, '/')) {
			$path = GRAV_ROOT . $path.'/';
		} else {
			$path = Grav::instance()['page']->path() . '/' . $path.'/';
		}

		$path = preg_replace('#//#', '/', $path);
		
		if (file_exists($path)) {
			//$files = array_diff(scandir($path), array('.', '..'));
			$files = glob($path.$pattern);
			$files = preg_replace('#'.GRAV_ROOT.'#', '', $files);
		} else {
			$files =  [];
		}
		
		return $files;
			
    }


}

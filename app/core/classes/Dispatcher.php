<?php

namespace app\core\classes;

final class Dispatcher
{

	private string $_templatesPath;
	private string $_cssPath;
	private string $_jsPath;

	private const APP_CONTROLLERS_PATH = '/app/controllers/';

	public function __construct()
	{

		$this->_templatesPath = $_SERVER['DOCUMENT_ROOT'] . '/resources/templates/';
		$this->_cssPath = $_SERVER['DOCUMENT_ROOT'] . '/resources/styles/';
		$this->_jsPath = $_SERVER['DOCUMENT_ROOT'] . '/resources/scripts/';

	}

	public function process()
	{
		header("Content-Type: text/html; charset=utf-8");
		exit($this->getPage());
	}

	private function getPage()
	{

		$routes = include 'routes/pages.php';

		if (!isset($routes[$_SERVER['REQUEST_URI']])) {
			return '404';
		}

		$route = $routes[$_SERVER['REQUEST_URI']];

		return $this->render($route['page'], $route['css'], $route['js'], $route['title'],$route['lab']);

	}

	private function render(string $page, array $cssPaths, array $jsPaths, string $title, string $lab)
	{

		$page = file_get_contents($this->_templatesPath . $page);

		$styles = '';
		if (!empty($cssPaths)) {
			foreach ($cssPaths as $css) {
				$styles .= file_get_contents($this->_cssPath . $css) . "\n";
			}
		}

		$scripts = '';
		if (!empty($jsPaths)) {
			foreach ($jsPaths as $js) {
				$scripts .= file_get_contents($this->_jsPath . $js) . "\n";
			}
		}

		$template = file_get_contents($this->_templatesPath . '/index.html');

		return str_replace(['{{STYLE}}', '{{SCRIPT}}', '{{BODY}}', '{{TITLE}}', '{{LAB}}'], [$styles, $scripts, $page, $title, $lab], $template);

	}

}
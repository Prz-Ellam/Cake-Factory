<?php

namespace core;

class Renderer
{
    private string $mainLayoutPath;
    private string $notFoundViewPath;
    private string $basePath;

    public function __construct()
    {
        $this->mainLayoutPath = "";
        $this->notFoundViewPath = "";
        $this->basePath = "";
    }

    public function setViewPath(string $path)
    {
        $this->basePath = $path;
    }

    public function getMainLayout() : string
    {
        return $this->mainLayoutPath;
    }

    public function setMainLayout(string $mainLayoutPath) : void
    {
        $this->mainLayoutPath = $mainLayoutPath;
    }

    public function getNotFound() : string
    {
        return $this->notFoundViewPath;
    }

    public function setNotFound(string $notFoundViewPath) : void
    {
        $this->notFoundViewPath = $notFoundViewPath;
    }

    public function renderView(string $view) : void
    {
        //$mainLayout = file_get_contents();
        //$content = file_get_contents($view);
        echo file_get_contents($this->basePath . $view);
    }

    public function renderNotFound() : void
    {
        $mainLayout = file_get_contents($this->mainLayoutPath);
        $notFoundView = file_get_contents($this->notFoundViewPath);
        print(str_replace("{{Content}}", $notFoundView, $mainLayout));
    }
}

?>
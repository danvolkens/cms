<?php
namespace Blocks;

/**
 *
 */
class EtPackage
{
	public $sitesAndKeys;
	public $requestIp;
	public $requestTime;
	public $requestDomain;
	public $requestPort;
	public $product;
	public $data;
	public $errors = array();

	/**
	 * @param null $properties
	 */
	function __construct($properties = null)
	{
		if ($properties == null)
			return;

		$this->sitesAndKeys = isset($properties['sitesAndKeys']) ? $properties['sitesAndKeys'] : null;
		$this->data = isset($properties['data']) ? $properties['data'] : null;
		$this->product = isset($properties['product']) ? $properties['product'] : null;
		$this->requestDomain = isset($properties['requestDomain']) ? $properties['requestDomain'] : null;
		$this->requestIp = isset($properties['requestIp']) ? $properties['requestIp'] : null;
		$this->requestTime = isset($properties['requestTime']) ? $properties['requestTime'] : null;
		$this->requestPort = isset($properties['requestPort']) ? $properties['requestPort'] : null;
	}

	/*
	 *
	 */
	public function decode()
	{
		echo Json::decode($this);
	}
}

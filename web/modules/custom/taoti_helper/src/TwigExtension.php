<?php

namespace Drupal\taoti_helper;

/**
 * Twig extension with some useful functions and filters.
 */
class TwigExtension extends \Twig_Extension {

  /**
   * Entity type manager object.
   *
   * @var \Drupal\Core\Entity\EntityTypeManager
   */
  public $entityTypeManager;

  /**
   * Current route match object.
   *
   * @var \Drupal\Core\Routing\CurrentRouteMatch
   */
  public $routeMatch;


  /**
   * TwigExtension constructor.
   *
   * @param \Drupal\Core\Entity\EntityInterface $entity_type_manager
   *   Entity type manager object.
   * @param \Drupal\Core\Routing\CurrentRouteMatch $route_match
   *   Current route match object.
   */
  public function __construct($entity_type_manager, $route_match) {
    $this->entityTypeManager = $entity_type_manager;
    $this->routeMatch = $route_match;
  }

  /**
   * {@inheritdoc}
   */
  public function getName() {
    return 'taoti_helper';
  }

  /**
   * {@inheritdoc}
   */
  public function getFunctions() {
    return [
      new \Twig_SimpleFunction('empty', [$this, 'isEmpty']),
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getFilters() {
    return [];
  }

  /**
   * Checks if an entity field is empty.
   *
   * @param string $field_name
   *   The field name.
   * @param string $entity_type
   *   The entity type.
   * @param mixed $id
   *   The ID of the entity to render.
   * @param string $view_mode
   *   (optional) The view mode that should be used to render the field.
   * @param string $langcode
   *   (optional) Language code to load translation.
   *
   * @return null|array
   *   A render array for the field or NULL if the value does not exist.
   */
  public function isEmpty($field_name, $entity_type, $id = NULL, $view_mode = 'default', $langcode = NULL) {
    /** @var \Drupal\Core\Entity\ContentEntityInterface $entity */
    $entity = $id
      ? $this->entityTypeManager->getStorage($entity_type)->load($id)
      : $this->routeMatch->getParameter($entity_type);

    if (!empty($entity)) {
      if ($langcode && $entity->hasTranslation($langcode)) {
        $entity = $entity->getTranslation($langcode);
      }

      if (isset($entity->{$field_name})) {
        $value = $entity->{$field_name}->getValue();

        return empty($value);
      }
    }

    return TRUE;
  }

}

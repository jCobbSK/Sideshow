    /**
    Strings Dictionary

    @@object strings
    **/
    var strings = {
        availableWizards: {
            "en": "Available Tutorials",
            "pt-br": "Tutoriais Disponíveis",
            "es": "Tutoriales Disponibles"
        },
        relatedWizards: {
            "en": "Related Wizards",
            "pt-br": "Tutoriais Relacionados",
            "es": "Tutoriales Relacionados"
        },
        noAvailableWizards: {
            "en": "There's no tutorials available.",
            "pt-br": "Não há tutoriais disponíveis para esta tela.",
            "es": "No hay tutoriales disponibles."
        },
        close: {
            "en": "Close",
            "pt-br": "Fechar",
            "es": "Cerrar"
        },
        estimatedTime: {
            "en": "Estimated Time",
            "pt-br": "Tempo Estimado",
            "es": "Tiempo Estimado"
        },
        next: {
            "en": "Next",
            "pt-br": "Continuar",
            "es": "Continuar"
        },
        finishWizard: {
            "en": "Finish Wizard",
            "pt-br": "Concluir Tutorial",
            "es": "Concluir Tutorial"
        },

      /**
       * Add/override words in dictionary. The correct keywords are required.
       * @method override
       * @param overrides
       */
        override: function(overrides) {
          for (var keyWord in overrides) {
            for (var langKey in overrides[keyWord])
              this[keyWord][langKey] = overrides[keyWord][langKey];
          }
        }
    };
